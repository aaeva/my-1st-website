// Helper for querying
const $ = (sel, parent = document) => parent.querySelector(sel);
const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

let currentLanguage = "en";

const translations = {
  en: {
    logo_title: "Smart Home",
    nav_dashboard: "Dashboard",
    nav_lights: "Lights",
    nav_climate: "Climate",
    nav_security: "Security",
    nav_cameras: "Cameras",
    nav_sensors: "Sensors",
    nav_automation: "Automation",
    nav_settings: "Settings",
    section_dashboard_title: "Dashboard",
    section_lights_title: "Lights",
    section_climate_title: "Climate",
    section_security_title: "Security",
    section_cameras_title: "Cameras",
    section_sensors_title: "Sensors",
    section_automation_title: "Automation",
    section_settings_title: "Settings",
    subtitle_dashboard: "Welcome home, everything is under control.",
    notifications_title: "Notifications",
    notifications_clear: "Clear all",
    user_role: "Home Admin",
    card_home_status: "Home Status",
    label_temperature: "Temperature",
    label_active_lights: "Active Lights",
    label_door: "Door",
    label_cameras: "Cameras",
    label_internet: "Internet",
    status_cameras_online: "Online",
    status_online: "Online",
    card_climate_control: "Climate Control",
    label_living_room: "Living Room",
    label_whole_home: "Whole Home",
    label_humidity: "Humidity",
    label_heater: "Heater",
    label_ac: "AC",
    card_lighting_control: "Lighting Control",
    room_living_room: "Living Room",
    room_kitchen: "Kitchen",
    room_bedroom: "Bedroom",
    room_bathroom: "Bathroom",
    card_security_system: "Security System",
    label_front_door_lock: "Front Door Lock",
    label_garage_door: "Garage Door",
    label_alarm_system: "Alarm System",
    label_motion_detection: "Motion Detection",
    alarm_armed: "Armed",
    alarm_disarmed: "Disarmed",
    motion_none: "No Motion",
    motion_detected: "Motion detected",
    card_live_cameras: "Live Camera Feeds",
    camera_front_door: "Front Door",
    camera_garage: "Garage",
    camera_backyard: "Backyard",
    camera_live: "Live",
    camera_simulated: "Simulated Feed",
    card_sensors_alerts: "Sensors & Alerts",
    sensor_motion: "Motion Sensor",
    sensor_smoke: "Smoke Detector",
    sensor_water: "Water Leak",
    sensor_window: "Window Sensor",
    location_hallway: "Hallway",
    location_kitchen: "Kitchen",
    location_basement: "Basement",
    location_bedroom: "Bedroom",
    status_safe: "Safe",
    status_closed: "Closed",
    status_open: "Open",
    status_smoke_detected: "Smoke detected",
    status_leak_detected: "Leak detected",
    card_temp_history: "Temperature History",
    chart_this_week: "This week",
    card_automation_scenarios: "Automation Scenarios",
    mode_night: "Night Mode",
    mode_night_desc: "Dim lights, arm security",
    mode_away: "Away Mode",
    mode_away_desc: "Turn off lights, set eco temp",
    mode_vacation: "Vacation Mode",
    mode_vacation_desc: "Random lights, max security",
    lights_section_title: "Lighting",
    lights_section_subtitle: "Control all smart lights in your home.",
    lights_all: "All Lights",
    climate_section_title: "Climate",
    climate_section_subtitle: "Manage temperature and comfort throughout your home.",
    climate_overview_title: "Climate Overview",
    weekly_history_title: "Weekly History",
    chart_home_temp: "Home Temp",
    security_section_title: "Security",
    security_section_subtitle: "Monitor and control your smart security systems.",
    security_controls_title: "Security Controls",
    cameras_section_title: "Cameras",
    cameras_section_subtitle: "View and manage all camera feeds.",
    live_feeds_title: "Live Feeds",
    sensors_section_title: "Sensors",
    sensors_section_subtitle: "Overview of all smart sensors and alerts.",
    sensors_status_title: "Sensors & Status",
    automation_section_title: "Automation",
    automation_section_subtitle: "Create and manage smart home automation scenarios.",
    quick_modes_title: "Quick Modes",
    settings_section_title: "Settings",
    settings_section_subtitle: "Configure devices, users, and connections.",
    add_devices_title: "Add Devices",
    label_device_name: "Device Name",
    placeholder_device_name: "Living Room Lamp",
    label_device_type: "Device Type",
    device_type_light: "Light",
    device_type_thermostat: "Thermostat",
    device_type_camera: "Camera",
    device_type_sensor: "Sensor",
    device_type_other: "Other",
    add_device_btn: "Add Device",
    manage_users_title: "Manage Users",
    label_user_email: "User Email",
    placeholder_user_email: "user@example.com",
    label_user_role: "Role",
    role_admin: "Admin",
    role_member: "Member",
    role_guest: "Guest",
    invite_user_btn: "Invite User",
    camera_connections_title: "Camera Connections",
    label_camera_name: "Camera Name",
    placeholder_camera_name: "Front Door",
    label_stream_url: "Stream URL",
    placeholder_stream_url: "rtsp://192.168.1.10/stream",
    connect_camera_btn: "Connect Camera",
    notif_security_armed_title: "Security armed",
    notif_security_armed_message: "Night mode activated at 22:00.",
    notif_temp_adjusted_title: "Temperature adjusted",
    notif_temp_adjusted_message: "Living room set to 22°C.",
    notif_lights_scheduled_title: "Lights scheduled",
    notif_lights_scheduled_message: "Evening scene will start at sunset.",
    notif_time_2min: "2 min ago",
    notif_time_10min: "10 min ago",
    notif_time_1hr: "1 hr ago",
  },
  ru: {
    logo_title: "Умный дом",
    nav_dashboard: "Панель",
    nav_lights: "Свет",
    nav_climate: "Климат",
    nav_security: "Безопасность",
    nav_cameras: "Камеры",
    nav_sensors: "Датчики",
    nav_automation: "Сценарии",
    nav_settings: "Настройки",
    section_dashboard_title: "Панель",
    section_lights_title: "Свет",
    section_climate_title: "Климат",
    section_security_title: "Безопасность",
    section_cameras_title: "Камеры",
    section_sensors_title: "Датчики",
    section_automation_title: "Сценарии",
    section_settings_title: "Настройки",
    subtitle_dashboard: "Добро пожаловать домой. Все под контролем.",
    notifications_title: "Уведомления",
    notifications_clear: "Очистить",
    user_role: "Администратор дома",
    card_home_status: "Состояние дома",
    label_temperature: "Температура",
    label_active_lights: "Включённый свет",
    label_door: "Дверь",
    label_cameras: "Камеры",
    label_internet: "Интернет",
    status_cameras_online: "онлайн",
    status_online: "онлайн",
    card_climate_control: "Управление климатом",
    label_living_room: "Гостиная",
    label_whole_home: "Весь дом",
    label_humidity: "Влажность",
    label_heater: "Отопление",
    label_ac: "Кондиционер",
    card_lighting_control: "Управление светом",
    room_living_room: "Гостиная",
    room_kitchen: "Кухня",
    room_bedroom: "Спальня",
    room_bathroom: "Ванная",
    card_security_system: "Система безопасности",
    label_front_door_lock: "Замок входной двери",
    label_garage_door: "Гаражные ворота",
    label_alarm_system: "Охранная сигнализация",
    label_motion_detection: "Датчик движения",
    alarm_armed: "Включена",
    alarm_disarmed: "Выключена",
    motion_none: "Нет движения",
    motion_detected: "Обнаружено движение",
    card_live_cameras: "Онлайн‑камеры",
    camera_front_door: "Парадная дверь",
    camera_garage: "Гараж",
    camera_backyard: "Двор",
    camera_live: "Онлайн",
    camera_simulated: "Симуляция видео",
    card_sensors_alerts: "Датчики и оповещения",
    sensor_motion: "Датчик движения",
    sensor_smoke: "Датчик дыма",
    sensor_water: "Датчик протечки",
    sensor_window: "Датчик окна",
    location_hallway: "Коридор",
    location_kitchen: "Кухня",
    location_basement: "Подвал",
    location_bedroom: "Спальня",
    status_safe: "Норма",
    status_closed: "Закрыто",
    status_open: "Открыто",
    status_smoke_detected: "Обнаружен дым",
    status_leak_detected: "Обнаружена протечка",
    card_temp_history: "История температуры",
    chart_this_week: "Эта неделя",
    card_automation_scenarios: "Сценарии автоматизации",
    mode_night: "Ночной режим",
    mode_night_desc: "Приглушить свет, включить охрану",
    mode_away: "Никого нет дома",
    mode_away_desc: "Выключить свет, эко‑температура",
    mode_vacation: "Отпуск",
    mode_vacation_desc: "Случайный свет, макс. охрана",
    lights_section_title: "Свет",
    lights_section_subtitle: "Управляйте умным светом во всём доме.",
    lights_all: "Все источники света",
    climate_section_title: "Климат",
    climate_section_subtitle: "Управляйте температурой и комфортом в доме.",
    climate_overview_title: "Общий климат",
    weekly_history_title: "История за неделю",
    chart_home_temp: "Температура дома",
    security_section_title: "Безопасность",
    security_section_subtitle: "Следите за всеми системами безопасности.",
    security_controls_title: "Панель безопасности",
    cameras_section_title: "Камеры",
    cameras_section_subtitle: "Просмотр и управление видеопотоками.",
    live_feeds_title: "Онлайн‑потоки",
    sensors_section_title: "Датчики",
    sensors_section_subtitle: "Обзор всех датчиков и тревог.",
    sensors_status_title: "Датчики и статусы",
    automation_section_title: "Сценарии",
    automation_section_subtitle: "Создавайте и настраивайте сценарии.",
    quick_modes_title: "Быстрые режимы",
    settings_section_title: "Настройки",
    settings_section_subtitle: "Устройства, пользователи и камеры.",
    add_devices_title: "Добавить устройства",
    label_device_name: "Название устройства",
    placeholder_device_name: "Торшер в гостиной",
    label_device_type: "Тип устройства",
    device_type_light: "Свет",
    device_type_thermostat: "Термостат",
    device_type_camera: "Камера",
    device_type_sensor: "Датчик",
    device_type_other: "Другое",
    add_device_btn: "Добавить устройство",
    manage_users_title: "Пользователи",
    label_user_email: "Email пользователя",
    placeholder_user_email: "user@example.com",
    label_user_role: "Роль",
    role_admin: "Администратор",
    role_member: "Участник",
    role_guest: "Гость",
    invite_user_btn: "Пригласить пользователя",
    camera_connections_title: "Подключение камер",
    label_camera_name: "Название камеры",
    placeholder_camera_name: "Парадная дверь",
    label_stream_url: "URL потока",
    placeholder_stream_url: "rtsp://192.168.1.10/stream",
    connect_camera_btn: "Подключить камеру",
    notif_security_armed_title: "Охрана включена",
    notif_security_armed_message: "Ночной режим активирован в 22:00.",
    notif_temp_adjusted_title: "Температура изменена",
    notif_temp_adjusted_message: "В гостиной установлено 22°C.",
    notif_lights_scheduled_title: "Свет по расписанию",
    notif_lights_scheduled_message: "Вечерняя сцена включится на закате.",
    notif_time_2min: "2 мин назад",
    notif_time_10min: "10 мин назад",
    notif_time_1hr: "1 час назад",
  },
};

function t(key) {
  const langTable = translations[currentLanguage] || translations.en;
  return langTable[key] ?? translations.en[key] ?? key;
}

function applyTranslations() {
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    el.textContent = t(key);
  });
  $$("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (!key) return;
    el.placeholder = t(key);
  });
}

function setupI18n() {
  const toggle = $("#lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-lang]");
      if (!btn) return;
      const lang = btn.dataset.lang;
      if (!lang || lang === currentLanguage) return;
      currentLanguage = lang;
      document.documentElement.lang = lang;
      $$(".lang-toggle button").forEach((b) =>
        b.classList.toggle("active", b.dataset.lang === lang)
      );
      applyTranslations();
    });
  }
  document.documentElement.lang = currentLanguage;
  applyTranslations();
}

document.addEventListener("DOMContentLoaded", () => {
  setupI18n();
  setupNavigation();
  setupNotifications();
  setupClimateControls();
  setupLightingControls();
  setupSecurityControls();
  setupAutomation();
  setupSettings();
  setupSensorsSimulation();
  setupCharts();
  syncSecondaryViews();
});

function setupNavigation() {
  const navItems = $$(".nav-item");
  const sections = {
    dashboard: $("#dashboard-section"),
    lights: $("#lights-section"),
    climate: $("#climate-section"),
    security: $("#security-section"),
    cameras: $("#cameras-section"),
    sensors: $("#sensors-section"),
    automation: $("#automation-section"),
    settings: $("#settings-section"),
  };

  const sectionTitleKey = {
    dashboard: "section_dashboard_title",
    lights: "section_lights_title",
    climate: "section_climate_title",
    security: "section_security_title",
    cameras: "section_cameras_title",
    sensors: "section_sensors_title",
    automation: "section_automation_title",
    settings: "section_settings_title",
  };

  navItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      const sectionKey = btn.dataset.section;
      navItems.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      Object.values(sections).forEach((sec) => sec.classList.remove("active"));
      const section = sections[sectionKey];
      if (section) section.classList.add("active");

      const titleEl = $("#section-title");
      const key = sectionTitleKey[sectionKey] || "section_dashboard_title";
      titleEl.dataset.i18n = key;
      applyTranslations();
    });
  });
}

function setupNotifications() {
  const toggle = $("#notification-toggle");
  const panel = $("#notification-panel");
  const list = $("#notification-list");
  const clearBtn = $("#clear-notifications");
  const countBadge = $("#notification-count");

  const notifications = [
    {
      icon: "fa-shield-halved",
      titleKey: "notif_security_armed_title",
      messageKey: "notif_security_armed_message",
      timeKey: "notif_time_2min",
    },
    {
      icon: "fa-temperature-half",
      titleKey: "notif_temp_adjusted_title",
      messageKey: "notif_temp_adjusted_message",
      timeKey: "notif_time_10min",
    },
    {
      icon: "fa-lightbulb",
      titleKey: "notif_lights_scheduled_title",
      messageKey: "notif_lights_scheduled_message",
      timeKey: "notif_time_1hr",
    },
  ];

  function renderNotifications() {
    list.innerHTML = "";
    notifications.forEach((n) => {
      const item = document.createElement("div");
      item.className = "notification";
      item.innerHTML = `
        <div class="notification-icon">
          <i class="fa-solid ${n.icon}"></i>
        </div>
        <div class="notification-content">
          <span class="notification-title">${n.titleKey ? t(n.titleKey) : n.title}</span>
          <span class="notification-message">${
            n.messageKey ? t(n.messageKey) : n.message
          }</span>
          <span class="notification-time">${n.timeKey ? t(n.timeKey) : n.time}</span>
        </div>
      `;
      list.appendChild(item);
    });
    countBadge.textContent = notifications.length;
    countBadge.style.display = notifications.length ? "flex" : "none";
  }

  renderNotifications();

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.toggle("open");
  });

  clearBtn.addEventListener("click", () => {
    notifications.splice(0, notifications.length);
    renderNotifications();
  });

  document.addEventListener("click", (e) => {
    if (!panel.contains(e.target) && !toggle.contains(e.target)) {
      panel.classList.remove("open");
    }
  });

  // Expose helper to other modules
  window.addNotification = (title, message, icon = "fa-house-signal") => {
    const now = new Date();
    notifications.unshift({
      icon,
      title,
      message,
      time: `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`,
    });
    renderNotifications();
  };
}

function setupClimateControls() {
  const tempDisplay = $("#climate-temp");
  const humidityDisplay = $("#climate-humidity");
  const btnInc = $("#temp-increase");
  const btnDec = $("#temp-decrease");
  const heaterSwitch = $("#heater-switch");
  const acSwitch = $("#ac-switch");

  let temp = 22;
  let humidity = 46;

  function updateClimateDisplays() {
    tempDisplay.textContent = temp;
    humidityDisplay.textContent = humidity;
    // Sync status card temperature
    $("#status-temp").textContent = temp;
    // Sync secondary climate
    $("#climate-temp-secondary").textContent = temp;
    $("#climate-humidity-secondary").textContent = humidity;
  }

  btnInc.addEventListener("click", () => {
    temp = Math.min(temp + 1, 30);
    humidity = Math.max(30, Math.min(70, humidity + (Math.random() > 0.5 ? 1 : -1)));
    updateClimateDisplays();
  });

  btnDec.addEventListener("click", () => {
    temp = Math.max(temp - 1, 16);
    humidity = Math.max(30, Math.min(70, humidity + (Math.random() > 0.5 ? -1 : 1)));
    updateClimateDisplays();
  });

  heaterSwitch.addEventListener("change", () => {
    if (heaterSwitch.checked) {
      acSwitch.checked = false;
      window.addNotification?.(
        "Heater enabled",
        "Heater is now ON.",
        "fa-fire-flame-curved"
      );
    } else {
      window.addNotification?.(
        "Heater disabled",
        "Heater is now OFF.",
        "fa-fire-flame-curved"
      );
    }
    $("#heater-switch-secondary").checked = heaterSwitch.checked;
  });

  acSwitch.addEventListener("change", () => {
    if (acSwitch.checked) {
      heaterSwitch.checked = false;
      window.addNotification?.(
        "AC enabled",
        "Air conditioning is now ON.",
        "fa-snowflake"
      );
    } else {
      window.addNotification?.(
        "AC disabled",
        "Air conditioning is now OFF.",
        "fa-snowflake"
      );
    }
    $("#ac-switch-secondary").checked = acSwitch.checked;
  });

  // Secondary climate buttons
  $$(".round-button.temp-secondary").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dir = parseInt(btn.dataset.dir || "0", 10);
      temp = Math.max(16, Math.min(30, temp + dir));
      updateClimateDisplays();
    });
  });

  $("#heater-switch-secondary").addEventListener("change", (e) => {
    heaterSwitch.checked = e.target.checked;
    heaterSwitch.dispatchEvent(new Event("change"));
  });
  $("#ac-switch-secondary").addEventListener("change", (e) => {
    acSwitch.checked = e.target.checked;
    acSwitch.dispatchEvent(new Event("change"));
  });

  updateClimateDisplays();
}

function setupLightingControls() {
  const rows = $$(".lighting .light-row");

  function updateStatus(row) {
    const toggle = $("[data-light-toggle]", row);
    const slider = $("[data-light-slider]", row);
    const status = $("[data-status]", row);
    if (!toggle || !slider || !status) return;

    const isOn = toggle.checked;
    const value = parseInt(slider.value, 10);

    if (!isOn || value === 0) {
      status.textContent = "Off";
    } else {
      status.textContent = `On · ${value}%`;
    }

    // Update active lights count
    const allRows = $$(".lighting .light-row");
    let active = 0;
    allRows.forEach((r) => {
      const t = $("[data-light-toggle]", r);
      const s = $("[data-light-slider]", r);
      if (t && s && t.checked && parseInt(s.value, 10) > 0) {
        active++;
      }
    });
    $("#status-lights").textContent = active.toString();
  }

  rows.forEach((row) => {
    const toggle = $("[data-light-toggle]", row);
    const slider = $("[data-light-slider]", row);

    toggle.addEventListener("change", () => {
      if (!toggle.checked) {
        slider.dataset.prevValue = slider.value;
        slider.value = "0";
      } else {
        slider.value = slider.dataset.prevValue || "60";
      }
      updateStatus(row);
    });

    slider.addEventListener("input", () => {
      if (parseInt(slider.value, 10) === 0) {
        toggle.checked = false;
      } else {
        toggle.checked = true;
      }
      updateStatus(row);
    });

    updateStatus(row);
  });

  // Clone lighting rows into lights section list for consistency
  const lightsSectionList = $("#lights-section-list");
  lightsSectionList.innerHTML = "";
  rows.forEach((row) => {
    const clone = row.cloneNode(true);
    lightsSectionList.appendChild(clone);
  });
}

function setupSecurityControls() {
  const frontDoorToggle = $("#front-door-toggle");
  const garageToggle = $("#garage-toggle");
  const frontDoorStatus = $("#front-door-status");
  const garageStatus = $("#garage-status");
  const alarmStatus = $("#alarm-status");
  const motionStatus = $("#motion-status");
  const armBtn = $("#arm-alarm");
  const disarmBtn = $("#disarm-alarm");

  function setAlarm(armed) {
    const pill = alarmStatus;
    pill.classList.toggle("armed", armed);
    pill.classList.toggle("alert", !armed);
    pill.innerHTML = `<span class="dot"></span> ${armed ? "Armed" : "Disarmed"}`;
    window.addNotification?.(
      `Alarm ${armed ? "armed" : "disarmed"}`,
      `Alarm system is now ${armed ? "armed" : "disarmed"}.`,
      "fa-bell"
    );

    const pillSecondary = $("#alarm-status-secondary");
    pillSecondary.className = pill.className;
    pillSecondary.innerHTML = pill.innerHTML;
  }

  frontDoorToggle.addEventListener("change", () => {
    const locked = frontDoorToggle.checked;
    frontDoorStatus.textContent = locked ? "Locked" : "Unlocked";
    $("#status-door").textContent = locked ? "Locked" : "Unlocked";
    $("#front-door-toggle-secondary").checked = locked;
    $("#front-door-status-secondary").textContent = frontDoorStatus.textContent;
  });

  garageToggle.addEventListener("change", () => {
    const closed = !garageToggle.checked;
    garageStatus.textContent = closed ? "Closed" : "Open";
    $("#garage-toggle-secondary").checked = garageToggle.checked;
    $("#garage-status-secondary").textContent = garageStatus.textContent;
  });

  armBtn.addEventListener("click", () => setAlarm(true));
  disarmBtn.addEventListener("click", () => setAlarm(false));

  // Secondary controls mirror
  $("#front-door-toggle-secondary").addEventListener("change", (e) => {
    frontDoorToggle.checked = e.target.checked;
    frontDoorToggle.dispatchEvent(new Event("change"));
  });
  $("#garage-toggle-secondary").addEventListener("change", (e) => {
    garageToggle.checked = e.target.checked;
    garageToggle.dispatchEvent(new Event("change"));
  });
  $("#arm-alarm-secondary").addEventListener("click", () => setAlarm(true));
  $("#disarm-alarm-secondary").addEventListener("click", () => setAlarm(false));

  // Simulate motion occasionally
  setInterval(() => {
    if (Math.random() < 0.25) {
      motionStatus.classList.remove("safe");
      motionStatus.classList.add("alert");
      motionStatus.innerHTML = `<span class="dot"></span> Motion detected`;
      $("#motion-status-secondary").className = motionStatus.className;
      $("#motion-status-secondary").innerHTML = motionStatus.innerHTML;
      window.addNotification?.(
        "Motion detected",
        "Movement detected in the hallway.",
        "fa-person-running"
      );
      setTimeout(() => {
        motionStatus.classList.remove("alert");
        motionStatus.classList.add("safe");
        motionStatus.innerHTML = `<span class="dot"></span> No Motion`;
        $("#motion-status-secondary").className = motionStatus.className;
        $("#motion-status-secondary").innerHTML = motionStatus.innerHTML;
      }, 6000);
    }
  }, 15000);
}

function setupAutomation() {
  const buttons = $$(".automation-btn");

  function activateMode(mode) {
    buttons.forEach((b) => {
      b.classList.toggle("active", b.dataset.mode === mode);
    });

    const lightsRows = $$(".lighting .light-row");
    const heaterSwitch = $("#heater-switch");
    const acSwitch = $("#ac-switch");
    const frontDoorToggle = $("#front-door-toggle");
    const garageToggle = $("#garage-toggle");

    if (mode === "night") {
      // Dim lights, arm security
      lightsRows.forEach((row) => {
        const slider = $("[data-light-slider]", row);
        const toggle = $("[data-light-toggle]", row);
        slider.value = "30";
        toggle.checked = true;
      });
      $("#temp-decrease").click();
      frontDoorToggle.checked = true;
      garageToggle.checked = false;
      $("#arm-alarm").click();
      window.addNotification?.(
        "Night mode",
        "Lights dimmed and security armed.",
        "fa-moon"
      );
    } else if (mode === "away") {
      // Turn off lights, eco temp
      lightsRows.forEach((row) => {
        const slider = $("[data-light-slider]", row);
        const toggle = $("[data-light-toggle]", row);
        slider.value = "0";
        toggle.checked = false;
      });
      heaterSwitch.checked = false;
      acSwitch.checked = true;
      $("#temp-increase").click();
      $("#arm-alarm").click();
      window.addNotification?.(
        "Away mode",
        "Home set to energy-saving settings.",
        "fa-person-walking-luggage"
      );
    } else if (mode === "vacation") {
      // Max security, random lights
      lightsRows.forEach((row) => {
        const slider = $("[data-light-slider]", row);
        const toggle = $("[data-light-toggle]", row);
        const v = Math.random() > 0.5 ? 70 : 0;
        slider.value = String(v);
        toggle.checked = v > 0;
      });
      heaterSwitch.checked = false;
      acSwitch.checked = true;
      $("#arm-alarm").click();
      window.addNotification?.(
        "Vacation mode",
        "Security maximized with presence simulation.",
        "fa-plane-departure"
      );
    }

    // Trigger update for lights count/status
    $$(".lighting .light-row").forEach((row) => {
      const slider = $("[data-light-slider]", row);
      slider.dispatchEvent(new Event("input"));
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => activateMode(btn.dataset.mode));
  });
}

function setupSettings() {
  const deviceName = $("#device-name");
  const deviceType = $("#device-type");
  const addDeviceBtn = $("#add-device-btn");
  const deviceList = $("#device-list");

  addDeviceBtn.addEventListener("click", () => {
    const name = deviceName.value.trim();
    if (!name) return;
    const type = deviceType.value;
    const li = document.createElement("li");
    li.className = "chip";
    li.innerHTML = `<span>${name}</span><small>${type}</small>`;
    deviceList.appendChild(li);
    deviceName.value = "";
    window.addNotification?.(
      "Device added",
      `New ${type.toLowerCase()} "${name}" added.`,
      "fa-plug-circle-bolt"
    );
  });

  const userEmail = $("#user-email");
  const userRole = $("#user-role");
  const addUserBtn = $("#add-user-btn");
  const userList = $("#user-list");

  addUserBtn.addEventListener("click", () => {
    const email = userEmail.value.trim();
    if (!email) return;
    const role = userRole.value;
    const li = document.createElement("li");
    li.className = "chip";
    li.innerHTML = `<span>${email}</span><small>${role}</small>`;
    userList.appendChild(li);
    userEmail.value = "";
    window.addNotification?.(
      "User invited",
      `Invitation sent to ${email} (${role}).`,
      "fa-user-plus"
    );
  });

  const cameraName = $("#camera-name");
  const cameraUrl = $("#camera-url");
  const connectCameraBtn = $("#connect-camera-btn");
  const cameraList = $("#camera-list");

  connectCameraBtn.addEventListener("click", () => {
    const name = cameraName.value.trim();
    const url = cameraUrl.value.trim();
    if (!name || !url) return;
    const li = document.createElement("li");
    li.className = "chip";
    li.innerHTML = `<span>${name}</span><small>Connected</small>`;
    cameraList.appendChild(li);
    cameraName.value = "";
    cameraUrl.value = "";
    window.addNotification?.(
      "Camera connected",
      `${name} camera connected successfully.`,
      "fa-camera"
    );
  });
}

function setupSensorsSimulation() {
  const smoke = $("#smoke-status");
  const water = $("#water-status");
  const windowSensor = $("#window-status");

  function setAlert(el, label) {
    el.classList.remove("safe");
    el.classList.add("alert");
    el.innerHTML = `<span class="dot"></span> ${label}`;
  }

  function setSafe(el, label) {
    el.classList.remove("alert");
    el.classList.add("safe");
    el.innerHTML = `<span class="dot"></span> ${label}`;
  }

  setInterval(() => {
    const r = Math.random();
    if (r < 0.15) {
      setAlert(smoke, "Smoke detected");
      window.addNotification?.(
        "Smoke detected",
        "Possible smoke in the kitchen.",
        "fa-fire-extinguisher"
      );
      setTimeout(() => setSafe(smoke, "Safe"), 8000);
    } else if (r < 0.3) {
      setAlert(water, "Leak detected");
      window.addNotification?.(
        "Water leak",
        "Moisture detected in the basement.",
        "fa-droplet"
      );
      setTimeout(() => setSafe(water, "Safe"), 8000);
    } else if (r < 0.45) {
      setAlert(windowSensor, "Open");
      window.addNotification?.(
        "Window open",
        "Bedroom window left open.",
        "fa-window-maximize"
      );
      setTimeout(() => setSafe(windowSensor, "Closed"), 8000);
    }
  }, 20000);

  // Clone sensors into sensors section list
  const sensorsMain = $$(".sensors .sensor-item");
  const sensorsSectionList = $("#sensors-section-list");
  sensorsMain.forEach((item) => {
    sensorsSectionList.appendChild(item.cloneNode(true));
  });
}

function setupCharts() {
  const canvas1 = $("#temp-chart");
  const canvas2 = $("#temp-chart-secondary");
  if (!canvas1 || !canvas2) return;

  const data = [21, 22, 23, 22, 24, 23, 22];

  function drawChart(canvas, color1, color2) {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth * dpr;
    const height = canvas.clientHeight * dpr;
    canvas.width = width;
    canvas.height = height;

    const padding = 20 * dpr;
    const innerW = width - padding * 2;
    const innerH = height - padding * 2;

    ctx.clearRect(0, 0, width, height);

    // Grid
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding + (innerH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    // Line path
    const min = Math.min(...data) - 1;
    const max = Math.max(...data) + 1;
    const range = max - min || 1;
    const points = data.map((v, i) => {
      const x = padding + (innerW / (data.length - 1)) * i;
      const y = padding + innerH - ((v - min) / range) * innerH;
      return { x, y };
    });

    // Gradient behind line
    const grad = ctx.createLinearGradient(0, padding, 0, height - padding);
    grad.addColorStop(0, color1);
    grad.addColorStop(1, "rgba(79, 140, 255, 0)");
    ctx.beginPath();
    ctx.moveTo(points[0].x, height - padding);
    points.forEach((p) => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, height - padding);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.strokeStyle = color2;
    ctx.lineWidth = 2.2 * dpr;
    ctx.stroke();

    // Points
    ctx.fillStyle = "#ffffff";
    points.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3 * dpr, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  const renderAll = () => {
    drawChart(
      canvas1,
      "rgba(79, 140, 255, 0.35)",
      "rgba(124, 92, 255, 0.9)"
    );
    drawChart(
      canvas2,
      "rgba(79, 140, 255, 0.35)",
      "rgba(79, 213, 161, 0.9)"
    );
  };

  renderAll();
  window.addEventListener("resize", () => {
    renderAll();
  });
}

function syncSecondaryViews() {
  // Start with consistent values on secondary cards
  $("#front-door-status-secondary").textContent = $("#front-door-status").textContent;
  $("#garage-status-secondary").textContent = $("#garage-status").textContent;
}

