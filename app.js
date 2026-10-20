(() => {
  "use strict";
  const STORAGE_KEY = "pixel-cat-75-v1";
  const TOTAL_DAYS = 75;
  const DEFAULT_TASKS = [
    { id: "learn", name: "30 dakika öğrenme" },
    { id: "project", name: "Kişisel projem üzerinde çalış" },
    { id: "move", name: "30 dakika hareket et" }
  ];

  // 75 hücreli minimal kedi silüeti. Satır başına hücre sayıları toplamı 75.
  const CAT_ROWS = [
    { y: 0, xs: [4, 10] },
    { y: 1, xs: [3, 4, 10, 11] },
    { y: 2, xs: [2, 3, 4, 5, 9, 10, 11, 12] },
    { y: 3, xs: [2, 3, 4, 5, 6, 8, 9, 10] },
    { y: 4, xs: [1, 2, 3, 4, 5, 6, 7, 8] },
    { y: 5, xs: [1, 2, 3, 4, 5, 6, 7, 8] },
    { y: 6, xs: [1, 2, 3, 4, 5, 6, 7, 8] },
    { y: 7, xs: [2, 3, 4, 5, 6, 7, 8] },
    { y: 8, xs: [3, 4, 5, 6, 7, 8, 9] },
    { y: 9, xs: [4, 5, 6, 7, 8, 9] },
    { y: 10, xs: [4, 5, 6, 7, 8] },
    { y: 11, xs: [3, 4, 5, 6] }
  ];
  const CAT_CELLS = CAT_ROWS.flatMap(row => row.xs.map(x => ({ x, y: row.y })));

  const $ = id => document.getElementById(id);
  const localDateString = date => {
    const d = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return d.toISOString().slice(0, 10);
  };
  const parseDate = value => {
    const [y, m, d] = value.split("-").map(Number);
    return new Date(y, m - 1, d, 12, 0, 0, 0);
  };
  const addDays = (date, count) => {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + count);
    return copy;
  };
  const formatDate = date => new Intl.DateTimeFormat("tr-TR", {
    day: "numeric", month: "long", year: "numeric"
  }).format(date);
  const makeId = () => "task-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  function freshState() {
    return {
      version: 1,
      startDate: localDateString(new Date()),
      tasks: DEFAULT_TASKS.map(task => ({ ...task })),
      completed: {},
      notes: {}
    };
  }
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return freshState();
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.tasks) || !parsed.startDate) return freshState();
      return {
        version: 1,
        startDate: parsed.startDate,
        tasks: parsed.tasks.map(t => ({ id: String(t.id), name: String(t.name) })),
        completed: parsed.completed && typeof parsed.completed === "object" ? parsed.completed : {},
        notes: parsed.notes && typeof parsed.notes === "object" ? parsed.notes : {}
      };
    } catch (error) {
      console.warn("Kayıtlar okunamadı; yeni bir başlangıç oluşturuluyor.", error);
      return freshState();
    }
  }

  let state = loadState();
  let selectedDay = getTodayDayNumber();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      $("save-status").textContent = "✓ Otomatik kaydedildi";
    } catch (error) {
      $("save-status").textContent = "Kayıt başarısız. Tarayıcı depolama alanını kontrol et.";
    }
  }
  function getTodayDayNumber() {
    const start = parseDate(state.startDate);
    const today = parseDate(localDateString(new Date()));
    return Math.max(1, Math.min(TOTAL_DAYS, Math.floor((today - start) / 86400000) + 1));
  }
  function dateForDay(day) {
    return addDays(parseDate(state.startDate), day - 1);
  }
  function dayKey(day) { return String(day); }
  function completedIds(day) {
    const list = state.completed[dayKey(day)];
    return Array.isArray(list) ? list : [];
  }
  function isDayComplete(day) {
    // En az bir hedef olması gerekir; boş listeyle gün otomatik tamamlanmaz.
    if (state.tasks.length === 0) return false;
    const done = new Set(completedIds(day));
    return state.tasks.every(task => done.has(task.id));
  }
  function completedDayCount() {
    let count = 0;
    for (let day = 1; day <= TOTAL_DAYS; day++) if (isDayComplete(day)) count++;
    return count;
  }

  function renderTasks() {
    const container = $("task-list");
    container.replaceChildren();
    const done = new Set(completedIds(selectedDay));
    $("task-count").textContent = `${state.tasks.filter(task => done.has(task.id)).length} / ${state.tasks.length}`;

    if (state.tasks.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "Henüz hedef yok. Yukarıdan ilk hedefini ekle.";
      container.appendChild(empty);
    }

    state.tasks.forEach(task => {
      const row = document.createElement("div");
      row.className = "task-item" + (done.has(task.id) ? " done" : "");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "task-checkbox";
      checkbox.checked = done.has(task.id);
      checkbox.setAttribute("aria-label", task.name + " tamamlandı");
      checkbox.addEventListener("change", () => toggleTask(task.id, checkbox.checked));

      const name = document.createElement("span");
      name.className = "task-name";
      name.textContent = task.name;
      name.title = "Hedef adını değiştirmek için tıkla";
      name.tabIndex = 0;
      name.setAttribute("role", "button");
      name.setAttribute("aria-label", task.name + " hedefini düzenle");
      const edit = () => {
        const next = prompt("Hedef adını düzenle:", task.name);
        if (next === null) return;
        const trimmed = next.trim();
        if (!trimmed) { alert("Hedef adı boş olamaz."); return; }
        task.name = trimmed.slice(0, 80);
        saveState(); renderAll();
      };
      name.addEventListener("click", edit);
      name.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); edit(); }
      });

      const remove = document.createElement("button");
      remove.className = "delete-task";
      remove.type = "button";
      remove.textContent = "×";
      remove.setAttribute("aria-label", task.name + " hedefini sil");
      remove.addEventListener("click", () => {
        if (!confirm(`"${task.name}" hedefini tüm 75 günlük listenden silmek istiyor musun?`)) return;
        state.tasks = state.tasks.filter(item => item.id !== task.id);
        for (const key of Object.keys(state.completed)) {
          state.completed[key] = state.completed[key].filter(id => id !== task.id);
        }
        saveState(); renderAll();
      });
      row.append(checkbox, name, remove);
      container.appendChild(row);
    });

    const complete = isDayComplete(selectedDay);
    $("completion-hint").hidden = complete;
    $("day-complete-message").hidden = !complete;
  }

  function toggleTask(taskId, checked) {
    const key = dayKey(selectedDay);
    const list = new Set(completedIds(selectedDay));
    if (checked) list.add(taskId); else list.delete(taskId);
    state.completed[key] = [...list];
    saveState();
    renderAll();
  }

  function renderCat() {
    const grid = $("pixel-cat");
    grid.replaceChildren();
    const doneCount = completedDayCount();
    const activeDays = new Set();
    let completedSoFar = 0;
    for (let day = 1; day <= TOTAL_DAYS; day++) {
      if (isDayComplete(day)) {
        completedSoFar++;
        activeDays.add(completedSoFar);
      }
    }
    // Kedinin şekli 75 hücre. Hücreler kazanılan gün sırasına göre boyanır.
    const order = [...CAT_CELLS].sort((a, b) => a.y - b.y || a.x - b.x);
    const byPosition = new Map(order.map((cell, index) => [`${cell.x},${cell.y}`, index + 1]));
    for (let y = 0; y < 15; y++) {
      for (let x = 0; x < 15; x++) {
        const cell = document.createElement("span");
        cell.className = "pixel";
        const orderNumber = byPosition.get(`${x},${y}`);
        if (!orderNumber) {
          cell.classList.add("decorative");
          cell.setAttribute("aria-hidden", "true");
        } else {
          if (orderNumber <= doneCount) cell.classList.add("active");
          cell.title = `Piksel ${orderNumber} / 75`;
        }
        grid.appendChild(cell);
      }
    }
    $("pixel-count").textContent = `${doneCount} / ${TOTAL_DAYS}`;
    $("completed-days").textContent = doneCount;
    $("remaining-days").textContent = TOTAL_DAYS - doneCount;
    const percent = Math.round(doneCount / TOTAL_DAYS * 100);
    $("progress-percent").textContent = `${percent}%`;
    $("progress-bar").style.width = `${percent}%`;
    $("cat-footer").textContent = doneCount === TOTAL_DAYS
      ? "✦ QUEST COMPLETE — You did it. Your cat is whole. ✦"
      : doneCount === 0
        ? "Her büyük şey küçük bir adımla başlar."
        : `${TOTAL_DAYS - doneCount} küçük adım sonra kedin tamamlanacak.`;
    $("pixel-cat").setAttribute("aria-label", `Piksel kedi: ${doneCount} / 75 gün tamamlandı.`);
  }

  function renderDay() {
    const date = dateForDay(selectedDay);
    $("day-kicker").textContent = `DAY ${String(selectedDay).padStart(2, "0")} / ${TOTAL_DAYS}`;
    $("date-title").textContent = `${selectedDay}. Gün`;
    $("date-subtitle").textContent = formatDate(date);
    $("prev-day").disabled = selectedDay <= 1;
    $("next-day").disabled = selectedDay >= TOTAL_DAYS || selectedDay >= getTodayDayNumber();
    $("daily-note").value = state.notes[dayKey(selectedDay)] || "";
    $("daily-note").disabled = selectedDay > getTodayDayNumber();
    $("add-task-form").querySelector("input").disabled = selectedDay > getTodayDayNumber();
    $("add-task-form").querySelector("button").disabled = selectedDay > getTodayDayNumber();
  }

  function renderAll() {
    renderDay();
    renderTasks();
    renderCat();
  }

  $("add-task-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = $("new-task");
    const name = input.value.trim();
    if (!name) return;
    if (state.tasks.length >= 20) { alert("İlk sürümde en fazla 20 hedef ekleyebilirsin."); return; }
    state.tasks.push({ id: makeId(), name: name.slice(0, 80) });
    input.value = "";
    saveState(); renderAll();
  });
  $("prev-day").addEventListener("click", () => { selectedDay = Math.max(1, selectedDay - 1); renderAll(); });
  $("next-day").addEventListener("click", () => { selectedDay = Math.min(getTodayDayNumber(), TOTAL_DAYS, selectedDay + 1); renderAll(); });
  $("daily-note").addEventListener("input", () => {
    state.notes[dayKey(selectedDay)] = $("daily-note").value.slice(0, 500);
    saveState();
  });

  const dialog = $("settings-dialog");
  $("settings-open").addEventListener("click", () => {
    $("start-date").value = state.startDate;
    dialog.showModal();
  });
  $("save-settings").addEventListener("click", () => {
    const value = $("start-date").value;
    if (!value) { alert("Lütfen başlangıç tarihi seç."); return; }
    state.startDate = value;
    selectedDay = Math.max(1, Math.min(TOTAL_DAYS, getTodayDayNumber()));
    saveState(); renderAll(); dialog.close();
  });
  $("reset-data").addEventListener("click", () => {
    const yes = confirm("Tüm hedefler, notlar ve ilerleme kalıcı olarak silinecek. Önce yedek almadıysan geri alamazsın. Devam edilsin mi?");
    if (!yes) return;
    state = freshState();
    selectedDay = 1;
    saveState(); renderAll();
    $("start-date").value = state.startDate;
  });

  $("export-data").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `pixel-cat-75-backup-${localDateString(new Date())}.json`;
    document.body.appendChild(link); link.click(); link.remove();
    URL.revokeObjectURL(url);
  });

  // Service worker yalnızca HTTPS/localhost üzerinde çalışır (GitHub Pages HTTPS sağlar).
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(error => console.warn("Offline modu etkinleştirilemedi:", error));
    });
  }
  renderAll();
})();