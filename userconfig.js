let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Elgoibar, Espain',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
    "m": "https://mkdl.jp",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://gemini.google.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          {
            name: "twitter",
            url: "https://x.com/home",
            icon: "brand-twitter-filled",
            icon_color: "#7daea3",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
          {
            name: "tetris",
            url: "https://tetris.com/",
            icon: "brand-apple-arcade",
            icon_color: "#ea6962",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "yt music",
            url: "https://music.youtube.com/",
            icon: "brand-youtube",
            icon_color: "#ea6962",
          },
          {
            name: "audible",
            url: "https://www.audible.com/",
            icon: "headphones",
            icon_color: "#e78a4e",
          },
          {
            name: "nhk news",
            url: "https://www3.nhk.or.jp/nhkworld/",
            icon: "news",
            icon_color: "#7daea3",
          },
        ],
      }],
    },
    {
      name: "IA",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "Plataformas IA",
          links: [
            {
              name: "gemini",
              url: "https://gemini.google.com/",
              icon: "sparkles",
              icon_color: "#89b482",
            },
            {
              name: "chatgpt",
              url: "https://chat.openai.com/",
              icon: "brand-openai",
              icon_color: "#7daea3",
            },
            {
              name: "mistral",
              url: "https://chat.mistral.ai/",
              icon: "wind",
              icon_color: "#d3869b",
            },
            {
              name: "grok",
              url: "https://grok.x.ai/",
              icon: "brand-x",
              icon_color: "#a9b665",
            },
            {
              name: "deepseek",
              url: "https://chat.deepseek.com/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "opencode",
              url: "https://opencode.ai/",
              icon: "terminal-2",
              icon_color: "#ea6962",
            },
            {
              name: "elyza",
              url: "https://elyza.ai/",
              icon: "letter-e",
              icon_color: "#d4be98",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "kotlin",
              url: "https://kotlinlang.org/docs/home.html",
              icon: "brand-kotlin",
              icon_color: "#89b482",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#ea6962",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "protonmail",
              url: "https://mail.proton.me/",
              icon: "mail",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "proton drive",
              url: "https://proton.me/drive",
              icon: "cloud-lock",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            }, 
            {
              name: "remote desktop",
              url: "https://remotedesktop.google.com",
              icon: "device-desktop",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "cyber",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "Recursos Clave",
          links: [
            {
              name: "SANS (ICS)",
              url: "https://www.sans.org/industrial-control-systems-security/",
              icon: "certificate",
              icon_color: "#e78a4e",
            },
            {
              name: "IEC 62443",
              url: "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards",
              icon: "book",
              icon_color: "#ea6962",
            },
            {
              name: "MITRE ATT&CK®",
              url: "https://attack.mitre.org/matrices/ics/",
              icon: "sitemap",
              icon_color: "#a9b665",
            },
            {
              name: "Dragos",
              url: "https://www.dragos.com/resources/",
              icon: "submarine",
              icon_color: "#7daea3",
            },
          ],
        }, {
          name: "Organismos Regionales",
          links: [
            {
              name: "ZIUR (Gipuzkoa)",
              url: "https://www.ziur.eus/",
              icon: "building-community",
              icon_color: "#7daea3",
            },
            {
              name: "CYBASQUE",
              url: "https://cybasque.eus/",
              icon: "users-group",
              icon_color: "#e78a4e",
            },
            {
              name: "METI (Japón)",
              url: "https://www.meti.go.jp/english/policy/safety_security/cybersecurity/index.html",
              icon: "building-bank",
              icon_color: "#ea6962",
            },
            {
              name: "ICSCoE (Japón)",
              url: "https://www.ipa.go.jp/en/about/org/icscoe/index.html",
              icon: "school",
              icon_color: "#d3869b",
            },
            {
              name: "JPCERT/CC",
              url: "https://www.jpcert.or.jp/english/",
              icon: "emergency-bed",
              icon_color: "#a9b665",
            },
          ],
        }
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  // Use CDN for the latest icons, fallback to local if specified.
  css.href = CONFIG.config.localIcons
    ? 'src/css/tabler-icons.min.css'
    : 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(css);
})();
