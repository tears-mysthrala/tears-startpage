class Clock extends Component {
  refs = {
    clock: '.clock-time',
    icon: '.clock-icon'
  };

  constructor() {
    super();
  }

  imports() {
    return [
      this.resources.icons.material,
      this.resources.fonts.roboto
    ];
  }

  style() {
    return `
        .clock-time {
            white-space: nowrap;
            font: 300 9pt 'Roboto', sans-serif;
            color: #d4be98;
            letter-spacing: .5px;
        }

        .clock-icon {
            color: #ea6962;
            font-size: 10pt;
            margin-right: 10px;
        }
    `;
  }

  template() {
    return `
        <span class="material-icons clock-icon">schedule</span>
        <p class="clock-time"></p>
    `;
  }

  setIconColor() {
    this.refs.icon.style.color = CONFIG.clock.iconColor;
  }

  setTime() {
    let date = new Date();

    if (this.timezone) {
      date = new Date(date.toLocaleString('en-US', { timeZone: this.timezone }));
    }

    this.refs.clock = date.strftime(CONFIG.clock.format);
  }

  connectedCallback() {
    this.render().then(() => {
      this.setTime();
      this.setIconColor();

      setInterval(() => this.setTime(), 1000);

      document.addEventListener('weather-location-changed', (e) => {
        this.timezone = e.detail.timezone;
        this.setTime();
      });
    });
  }
}
