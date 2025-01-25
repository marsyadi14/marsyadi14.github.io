const app = Vue.createApp({
  data: function () {
    return {};
  },
  methods: {},
});

// KONTAK DIV
const linkAkunDiv = {
  template: `
  <a :href='protocol + link' target="_blank" rel="noopener noreferrer" >
    <div class="m-1 text-base justify-center">
      <img class="mr-1 size-5 inline" :src='"assets/" + imageName + ".svg"' alt="" />
      <span class="inline-block align-middle no-underline hover:underline">
        {{ link }}
       </span>
    </div>
  </a>
  `,
  props: ["imageName", "protocol", "link"],
};
app.component("link-akun-div", linkAkunDiv);

const kontakDiv = {
  template: `
  <div class="grid grid-cols-3 gap-1 m-1">
    <div class="col-span-2">
      <h2 class="font-bold text-2xl">{{ contact }}</h2>
      <link-akun-div 
        v-for="(akun, i) in daftAkun" :key="i"
        :imageName="akun.imageName"
        :protocol="akun.protocol"
        :link="akun.link"
      />
    </div>
    <div>
      <img class="p-2" src="assets/photo.webp" alt="Foto 3x4">
    </div>
  </div>
  `,
  components: ["link-akun-div"],
  data: function () {
    return {
      contact: "Contact",
      daftAkun: [
        {
          imageName: "github-mark-white",
          link: "github.com/marsyadi14",
          protocol: "https://www.",
        },
        {
          imageName: "LinkedIn_icon",
          link: "linkedin.com/in/marsyadi/",
          protocol: "https://www.",
        },
        {
          imageName: "email-svgrepo-com",
          link: "m.arsyad.ikbar.14@gmail.com",
          protocol: "mailto:",
        },
      ],
    };
  },
  methods: {},
};
app.component("kontak-div", kontakDiv);

// GENERAL DIV
const generalDescDiv = {
  template: `
  <div id="education-div" class="grid grid-row-2 m-1 gap-1">
    <div class="text-pretty">
      <h2 class="font-bold text-2xl">About Me</h2>
      <p>{{ desc }}</p>
    </div>
    <div>
      <h2 class="font-bold text-2xl">Education</h2>
      <div class="content flex p-1">
        <img class="size-24" src="assets/ugm.webp" alt="" />
        <div class="p-2">
          <h3>{{ education.name }}</h3>
          <p>{{ education.startYear }} - {{ education.endYear }}</p>
          <p>Final Project - {{ education.finalProject }}</p>
        </div>
      </div>
    </div>
  </div>
  `,
  data: function () {
    return {
      desc: "I am a passionate software engineer specializing in building scalable and efficient web and mobile applications. I specialize in Android mobile development and have worked on projects ranging from website management into mobile application development. I always eager to learn something new. Here is a glimpse of my skills, projects, and experience",
      education: {
        name: "Universitas Gadjah Mada",
        startYear: 2019,
        endYear: 2025,
        finalProject:
          "Anaries, mobile application for learning skull’s Anatomy",
      },
    };
  },
};
app.component("general-div", generalDescDiv);

// SKILL DIV
const listOfSkillDiv = {
  template: `
  <div class="bg-gray-300 mx-4 my-2 rounded-md content flex px-3 py-2">
    <div class="flex items-center justify-center h-18">
      <img class="w-16" :src='"assets/skill/" + icon + ".svg"' :alt="name" />
    </div>
    <div class="mx-2 p-2 w-full">
      <h3 class="text-lg">{{ name }}</h3>
      <div class="w-full h-4 bg-gray-400 rounded-full">
        <div :class="[daftarLevel[level].levelClass, daftarLevel[level].levelColour]" class="h-full text-center text-xs text-white rounded-full">
          {{ daftarLevel[level].levelDesc }}
        </div>
      </div>
    </div>
  </div>
  `,
  props: ["name", "level", "icon"],
  data() {
    return {
      daftarLevel: [
        {
          levelDesc: "Basic",
          levelClass: "w-1/2",
          levelColour: "bg-yellow-500",
        },
        {
          levelDesc: "Intermediate",
          levelClass: "w-3/4",
          levelColour: "bg-orange-500",
        },
        {
          levelDesc: "Advanced",
          levelClass: "w-full",
          levelColour: "bg-green-500",
        },
      ],
    };
  },
};
app.component("list-of-skill-div", listOfSkillDiv);

const listOfLicenseDiv = {
  template: `
  <div class="bg-gray-300 mx-4 my-2 rounded-md content flex px-3 py-2">
    <div class="flex items-center justify-center h-18">
      <img class="w-16" :src='"assets/license/" + icon + ".svg"' :alt="icon" />
    </div>
    <div class="mx-2 p-2 w-full">
      <h3 class="text-base mb-4">{{ name }}</h3>
      <a :href="certificate" target="_blank" rel="noopener noreferrer">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 border border-blue-500 hover:border-transparent rounded"> See Credential</button>
      </a>
    </div>
  </div>
  `,
  props: ["name", "certificate", "icon"],
};
app.component("list-of-license-div", listOfLicenseDiv);

const skillsDiv = {
  template: `
  <div class="grid grid-cols-2 gap-2 mb-2">
    <button @click="switchSkill" :class="getSkillStyle()">
      Skill
    </button>
    <button @click="switchLicense" :class="getLicenseStyle()">
      License
    </button>
  </div>
  <div :class="overflowClass" v-if="isSkill">
    <list-of-skill-div 
        v-for="(skill, i) in listOfSkill" :key="i"
        :name="skill.name"
        :level="skill.level"
        :icon="skill.icon"
      />
  </div>
  <div :class="overflowClass" v-else>
    <list-of-license-div 
        v-for="(license, i) in listOfLicense" :key="i"
        :name="license.name"
        :certificate="license.certificate"
        :icon="license.icon"
      />
  </div>
  `,
  methods: {
    getSkillStyle() {
      if (this.isSkill) {
        return this.isSelected;
      } else {
        return this.isNotSelected;
      }
    },
    getLicenseStyle() {
      if (!this.isSkill) {
        return this.isSelected;
      } else {
        return this.isNotSelected;
      }
    },
    switchSkill() {
      this.isSkill = true;
    },
    switchLicense() {
      this.isSkill = false;
    },
  },
  data() {
    return {
      isSkill: true,
      overflowClass: "w-auto h-full max-h-80 overflow-y-auto",
      isSelected:
        "bg-blue-500 font-semibold text-white py-2 px-4 border border-transparent rounded",
      isNotSelected:
        "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
      listOfSkill: [
        // Beginner = 0...Advanced = 2
        {
          name: "Python",
          level: 2,
          icon: "python",
        },
        {
          name: "C",
          level: 1,
          icon: "c_lang",
        },
        {
          name: "C++",
          level: 2,
          icon: "cpp",
        },
        {
          name: "C#",
          level: 2,
          icon: "csharp",
        },
        {
          name: "Java",
          level: 2,
          icon: "java",
        },
        {
          name: "Kotlin",
          level: 2,
          icon: "kotlin",
        },
        {
          name: "Dart",
          level: 0,
          icon: "dart",
        },
        {
          name: "Flutter",
          level: 0,
          icon: "flutter",
        },
        {
          name: "HTML",
          level: 2,
          icon: "html",
        },
        {
          name: "JavaScript",
          level: 2,
          icon: "javascript",
        },
        {
          name: "VueJS",
          level: 0,
          icon: "vue",
        },
        {
          name: "PHP",
          level: 1,
          icon: "php",
        },
        {
          name: "CSS",
          level: 1,
          icon: "css-3",
        },
        {
          name: "Tailwind CSS",
          level: 0,
          icon: "tailwindcss",
        },
        {
          name: "SQL",
          level: 1,
          icon: "sql-db",
        },
        {
          name: "Wordpress",
          level: 1,
          icon: "wordpress",
        },
        {
          name: "Go",
          level: 0,
          icon: "golang",
        },
        {
          name: "R (Lang)",
          level: 0,
          icon: "rlang",
        },
      ],
      listOfLicense: [
        {
          name: "Introduction to DevOps",
          certificate:
            "https://www.coursera.org/account/accomplishments/verify/AZL6S6L5VSPH",
          icon: "coursera",
        },
        {
          name: "IT Security: Defense against the digital dark arts",
          certificate:
            "https://www.coursera.org/account/accomplishments/verify/DT7UM44FCTXU",
          icon: "coursera",
        },
        {
          name: "Getting Started with Front-End and Web Development",
          certificate:
            "https://www.coursera.org/account/accomplishments/verify/6CHLMJKX8QG2",
          icon: "coursera",
        },
        {
          name: "Introduction to Structured Query Language (SQL)",
          certificate:
            "https://www.coursera.org/account/accomplishments/verify/9U9KDW2E9M3M",
          icon: "coursera",
        },
        {
          name: "Object-Oriented Design",
          certificate:
            "https://www.coursera.org/account/accomplishments/verify/UMNWVWA5U752",
          icon: "coursera",
        },
        {
          name: "The Data Scientist’s Toolbox",
          certificate:
            "https://www.coursera.org/account/accomplishments/verify/9577DYS5BY27",
          icon: "coursera",
        },
        {
          name: "HTML, CSS, and Javascript for Web Developers",
          certificate:
            "https://www.coursera.org/account/accomplishments/verify/LXPFJHT46NY7",
          icon: "coursera",
        },
        {
          name: "Introduction to Python",
          certificate:
            "https://www.datacamp.com/completed/statement-of-accomplishment/course/2f50ffabc0bb7c40fc074d6d046b74011450fdf1",
          icon: "datacamp",
        },
        {
          name: "Intermediate Python",
          certificate:
            "https://www.datacamp.com/completed/statement-of-accomplishment/course/9159c59a1bab3d32de31cd7e23820564bbb31e73",
          icon: "datacamp",
        },
        {
          name: "Intermediate SQL Queries",
          certificate:
            "https://www.datacamp.com/completed/statement-of-accomplishment/course/ae88fd6703f0764a0e2d61efe9b236a8cfc85b3f",
          icon: "datacamp",
        },
        {
          name: "Understanding Machine Learning",
          certificate:
            "https://www.datacamp.com/completed/statement-of-accomplishment/course/6a6b854dfbd25c71dd0fac6d475f241a7108efa7",
          icon: "datacamp",
        },
      ],
    };
  },
  components: ["list-of-skill-div"],
};
app.component("skill-div", skillsDiv);

// EXPERIENCE DIV
const listOfTaskWorkingDiv = {
  template: `
  <li class="list-inside list-disc text-pretty">
    {{ task }}
  </li>
  `,
  props: ["task"],
};
app.component("list-of-task-div", listOfTaskWorkingDiv);

const listOfImageDiv = {
  template: `
  <div class="relative slide">
    <div class="carousel-indicators absolute bottom-0 flex bg-yellow-100 h-24 w-full justify-center items-center">
      <ol class="z-50 flex w-4/12 justify-center">
        <li v-for="(img, i) in images" :key="i" class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"></li>
      </ol>
    </div>
    <div class="carousel-inner relative overflow-hidden w-full">
      <div v-for="(img, i) in images" :id="'slide-'+i" :key="i" :class="active === i ? 'active' : 'left-full'" class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
        <img class="block w-full" :src="'assets/working/' + img +'.webp'" alt="First slide" />
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      active: 0,
      images: [
        "ace_tunggal",
        "ace_ganda",
        "giz_tunggal",
        "giz_ganda_01",
        "giz_ganda_02",
        "giz_ganda_03",
        "giz_ganda_04",
        "giz_ganda_05",
        "giz_ganda_06",
        "giz_ganda_07",
        "giz_ganda_08",
        "giz_ganda_09",
      ],
    };
  },
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 2000);
  },
};
app.component("list-of-image-div", listOfImageDiv);

const listOfWorkingDiv = {
  template: `
  <div class="bg-gray-300 mx-4 my-2 rounded-md content flex px-3 py-2">
    <div class="flex items-center justify-center h-18">
      <img class="w-24" :src='"assets/work_logo/" + icon + ".webp"' :alt="icon" />
    </div>
    <div class="mx-2 p-2 w-full">
      <h3 class="font-bold text-base">{{ perusahaan }} - {{ title }}</h3>
      <p>{{ getDuration() }}</p>
      <ul>
        <list-of-task-div 
          v-for="(task, i) in taskList" :key="i"
          :task="task"
        />
      </ul>
    </div>
  </div>
  `,
  props: [
    "perusahaan",
    "title",
    "icon",
    "periodeStart",
    "periodeEnd",
    "taskList",
    "pictureList",
  ],
  data() {
    return {};
  },
  methods: {
    getDuration() {
      const datfBulan = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      let awal = `${datfBulan[this.periodeStart[1] - 1]} ${
        this.periodeStart[2] === this.periodeEnd[2] ? "" : this.periodeStart[2]
      }`;
      let akhir = `${datfBulan[this.periodeEnd[1] - 1]} ${this.periodeEnd[2]}`;
      return `${awal} - ${akhir}`;
    },
  },
};
app.component("list-of-working-div", listOfWorkingDiv);

const experienceDiv = {
  template: `
  <div class="m-1 gap-1">
    <h2 class="font-bold text-2xl mb-2">My Working Experience</h2>
    <div class="grid grid-cols-3 gap-1">
      <div class="col-span-2 w-auto h-full max-h-80 overflow-y-auto">
        <list-of-working-div 
            v-for="(working, i) in listOfExperience" :key="i"
            :perusahaan="working.perusahaan"
            :title="working.title"
            :icon="working.icon"
            :periodeStart="working.periodeStart"
            :periodeEnd="working.periodeEnd"
            :taskList="working.taskList"
          />
      </div>
      <div>
        <h2 class="text-pretty font-bold text-2xl">My Journey </h2>
        <list-of-image-div />
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      listOfExperience: [
        {
          perusahaan: "ASEAN Centre for Energy",
          icon: "ace",
          title: "ICT Internship",
          periodeStart: [2, 7, 2024],
          periodeEnd: [31, 12, 2024],
          taskList: ["Supporting ICT Team in Technical Matter"],
        },
        {
          perusahaan: "GIZ - AMUSE Project",
          icon: "giz",
          title: "Trainee for IT Support",
          periodeStart: [1, 2, 2024],
          periodeEnd: [31, 7, 2024],
          taskList: [
            "Supported ASEAN Municipal Solid Waste Enhancement (AMUSE) Project in developing regional digital knowledge platform",
            "Assisted AMUSE Team in implementing regional activities, includes data cleaning, collection, and other data management measure",
          ],
        },
        {
          perusahaan: "Voluteer Convention Event",
          icon: "yogyakomtek",
          title: "Yogyakomtek",
          periodeStart: [23, 9, 2023],
          periodeEnd: [27, 9, 2023],
          taskList: [
            "Volunteered as Ticketing and person in charge for stand equipment",
          ],
        },
        {
          perusahaan: "Universitas Gadjah Mada",
          icon: "ugm",
          title: "Laboratory Assistant",
          periodeStart: [29, 8, 2022],
          periodeEnd: [29, 11, 2022],
          taskList: [
            "Assisted laboratory participants in completing weekly assignment",
            "Conducted evaluation on laboratory participants’ study progress",
          ],
        },
        {
          perusahaan: "Intern Virtual Patient Team",
          icon: "kalikesia",
          title: "PT Bestari Inovasi Kesehatan",
          periodeStart: [20, 6, 2022],
          periodeEnd: [15, 12, 2022],
          taskList: [
            "Collaborated in the development of SMART-Pasivik Virtual Patient API",
            "Wrote API Documentation",
            "Developed custom dictionary with nursery team",
          ],
        },
        {
          perusahaan: "Universitas Gadjah Mada",
          icon: "ugm",
          title: "Laboratory Assistant",
          periodeStart: [21, 2, 2022],
          periodeEnd: [2, 6, 2022],
          taskList: [
            "Assisted laboratory participants in completing weekly assignment",
            "Conducted evaluation on laboratory participants' study progress",
          ],
        },
        {
          perusahaan: "PT Javan Cipta Solusi",
          icon: "javan",
          title: "System Analyst",
          periodeStart: [21, 2, 2022],
          periodeEnd: [2, 6, 2022],
          taskList: [
            "Assisted laboratory participants in completing weekly assignment",
            "Conducted evaluation on laboratory participants'’' study progress",
          ],
        },
      ],
    };
  },
};
app.component("experience-div", experienceDiv);

const mainApp = {
  template: `
  <h1 class="font-serif font-bold text-5xl text-center">
    {{ fullName }}
  </h1>
  <div class="m-2 grid grid-cols-3 gap-2">
    <div class="box"><kontak-div /></div>
    <div class="box col-span-2"><general-div /></div>
    <div class="box row-span-2 p-2"><skill-div /></div>
    <div class="box col-span-2 row-span-2"><experience-div/></div>
  </div>
  `,
  data() {
    return {
      fullName: "Muhammad Arsyad Ikbar",
    };
  },
};
app.component("main-app", mainApp);

app.mount("#app");
