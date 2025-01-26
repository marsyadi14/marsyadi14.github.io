const app = Vue.createApp({
  data: function () {
    return {};
  },
  methods: {},
});

const mainApp = {
  template: `
  <cust-header :information="information" />
  <sect-intro :information="information" />
  <sect-skill :information="information" />
  <sect-license :information="information" />
  <sect-project :information="information" />
  <sect-experience :information="information" />
  <sect-contact :information="information" />
  <cust-footer :information="information" />
  `,
  data: function () {
    return {
      information: {
        name: "Muhammad Arsyad Ikbar",
        description:
          "I am a passionate software engineer specializing in building scalable and efficient web and mobile applications. I specialize in Android mobile development and have worked on projects ranging from website management into mobile application development. I always eager to learn something new. Here is a glimpse of my skills, projects, and experience",
      },
    };
  },
};
app.component("main-app", mainApp);

// CUSTOM HEADER
const header = {
  template: `
  <header class="bg-blue-600 text-white p-6">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">{{ information.name }}</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#skills" class="hover:underline">Skills</a></li>
          <li><a href="#licenses" class="hover:underline">Licenses</a></li>
          <li><a href="#projects" class="hover:underline">Projects</a></li>
          <li><a href="#experience" class="hover:underline">Experience</a></li>
          <li><a href="#contact" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  `,
  props: ["information"],
};
app.component("cust-header", header);

// INTRODUCTION
const sectIntro = {
  template: `
  <section class="container mx-auto p-6 text-center">
    <h2 class="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
    <p class="text-lg text-pretty">{{ information.description }}</p>
  </section>
  `,
  props: ["information"],
};
app.component("sect-intro", sectIntro);

// SKILL
const listOfSkill = {
  template: `
  <div class="border bg-gray-50 shadow m-1 rounded-md content flex p-1 ">
    <div class="flex items-center justify-center h-18 ml-2">
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
app.component("list-of-skill", listOfSkill);

const sectSkill = {
  template: `
<section id="skills" class="container mx-auto p-6 bg-white shadow-md rounded-lg mb-6">
  <h3 class="text-2xl font-bold mb-4">Skills</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <div class="border border-gray-200 rounded-md py-3">
      <h4 class="text-lg mb-4 ml-4">Front-End</h4>
      <div class="grid lg:grid-cols-2 grid-cols-1 px-2">
        <list-of-skill
          v-for="(frontend, i) in (skillset.FrontEnd)"
          :key="i"
          :name="frontend.name"
          :level="frontend.level"
          :icon="frontend.icon"
        />
      </div>
    </div>
    <div class="border border-gray-200 rounded-md py-3 px-2">
      <h4 class="text-lg mb-4 ml-4">Back-End</h4>
      <div class="grid lg:grid-cols-2 grid-cols-1">
        <list-of-skill
          v-for="(backend, i) in (skillset.BackEnd)"
          :key="i"
          :name="backend.name"
          :level="backend.level"
          :icon="backend.icon"
        />
      </div>
    </div>
    <div class="border border-gray-200 rounded-md py-3 px-2">
      <h4 class="text-lg mb-4 ml-4">Database</h4>
      <div class="grid lg:grid-cols-2 grid-cols-1">
        <list-of-skill
          v-for="(database, i) in (skillset.Database)"
          :key="i"
          :name="database.name"
          :level="database.level"
          :icon="database.icon"
        />
      </div>
    </div>
    <div class="border border-gray-200 rounded-md py-3 px-2">
      <h4 class="text-lg mb-4 ml-4">Android</h4>
      <div class="grid lg:grid-cols-2 grid-cols-1">
        <list-of-skill
          v-for="(android, i) in (skillset.Android)"
          :key="i"
          :name="android.name"
          :level="android.level"
          :icon="android.icon"
        />
      </div>
    </div>
    <div class="border border-gray-200 rounded-md py-3 px-2">
      <h4 class="text-lg mb-4 ml-4">General</h4>
      <div class="grid lg:grid-cols-2 grid-cols-1">
        <list-of-skill
          v-for="(general, i) in (skillset.General)"
          :key="i"
          :name="general.name"
          :level="general.level"
          :icon="general.icon"
        />
      </div>
    </div>
  </div>
</section>
  `,
  props: ["information"],
  data() {
    return {
      skillset: {
        // Beginner = 0...Advanced = 2
        General: [
          { name: "Python", level: 2, icon: "python" },
          { name: "C", level: 2, icon: "c_lang" },
          { name: "C++", level: 2, icon: "cpp" },
          { name: "C#", level: 2, icon: "csharp" },
          { name: "Java", level: 2, icon: "java" },
          { name: "Go", level: 0, icon: "golang", type: "General" },
        ],
        Android: [
          { name: "Kotlin", level: 2, icon: "kotlin" },
          { name: "Dart", level: 0, icon: "dart" },
          { name: "Flutter", level: 0, icon: "flutter" },
        ],
        FrontEnd: [
          { name: "HTML", level: 2, icon: "html" },
          { name: "VueJS", level: 0, icon: "vue" },
          { name: "CSS", level: 1, icon: "css-3" },
          { name: "Tailwind CSS", level: 0, icon: "tailwindcss" },
        ],
        BackEnd: [
          { name: "JavaScript", level: 2, icon: "javascript" },
          { name: "PHP", level: 1, icon: "php" },
          { name: "Wordpress", level: 1, icon: "wordpress" },
        ],
        Database: [
          { name: "SQL", level: 1, icon: "sql-db" },
          { name: "NoSQL", level: 1, icon: "nosql" },
          { name: "R (Lang)", level: 0, icon: "rlang" },
        ],
      },
    };
  },
};
app.component("sect-skill", sectSkill);

const listOfLicense = {
  template: `
  <div class="p-4 bg-gray-50 rounded shadow content flex m-2">
    <div class="flex items-center justify-center h-18">
      <img class="w-24" :src='"assets/license/" + icon + ".svg"' :alt="icon" />
    </div>
    <div class="mx-2 p-2 w-full">      
      <h4 class="font-bold mb-2">{{ name }}</h4>
      <a :href="certificate" class="text-blue-600 hover:underline">See Credential</a>
    </div>
  </div>
  `,
  props: ["name", "certificate", "icon"],
  data() {
    return {
      credentialButton:
        "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 border border-blue-500 hover:border-transparent rounded",
    };
  },
};
app.component("list-of-license", listOfLicense);

const sectLicense = {
  template: `
<section id="licenses" class="container mx-auto p-6 bg-white shadow-md rounded-lg mb-6">
  <h3 class="text-2xl font-bold mb-4">Licenses</h3>
  <div class="border border-gray-200 rounded-md py-3 px-2">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <list-of-license
        v-for="(license, i) in listOfLicense"
        :key="i"
        :name="license.name"
        :certificate="license.certificate"
        :icon="license.icon"
      />
    </div>
  </div>
</section>
  `,
  props: ["information"],
  data() {
    return {
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
};
app.component("sect-license", sectLicense);

// PROJECT
const listOfProject = {
  template: `
  <div class="p-4 bg-gray-50 rounded shadow content flex">
    <div class="flex items-center justify-center h-18">
      <img class="w-24" :src='"assets/work_logo/" + icon + ".webp"' :alt="icon" />
    </div>
    <div class="mx-2 p-2 w-full">      
      <h4 class="font-bold mb-2">{{ name }}</h4>
      <p>Description: {{ desc }}</p>
      <p>Technologies Used: {{ commaString(techUsed) }}</p>
      <a :href="projectLink" class="text-blue-600 hover:underline">View Project</a>
    </div>
  </div>
  `,
  props: ["name", "icon", "desc", "techUsed", "projectLink"],
  data() {
    return {};
  },
  methods: {
    commaString(stringList) {
      return stringList.join(", ");
    },
  },
};
app.component("list-of-project", listOfProject);

const sectProject = {
  template: `
  <section id="projects" class="container mx-auto p-6 bg-white shadow-md rounded-lg mb-6">
    <h3 class="text-2xl font-bold mb-4">Projects</h3>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
      <list-of-project
          v-for="(project, i) in projectList"
          :key="i"
          :name="project.name"
          :organization="project.organization"
          :icon="project.icon"
          :desc="project.desc"
          :techUsed="project.techUsed"
          :projectLink="project.projectLink"
        />
    </div>
  </section>
  `,
  data() {
    return {
      projectList: [
        {
          name: "API Pasien Virtual",
          organization: "Kalikesia",
          icon: "kalikesia",
          desc: "Creating API documentation for nurse training web application.",
          techUsed: ["JavaScript"],
          projectLink: "https://github.com/Kalikesia/Pasien-Virtual",
        },
        {
          name: "Anaries (Kotlin)",
          organization: "Universitas Gadjah mada",
          icon: "ugm",
          desc: "Android Application for learning skull anatomy using immersive learning powered.",
          techUsed: ["Kotlin"],
          projectLink: "https://github.com/damiosdam/anaries-kotlin",
        },
        {
          name: "ASEAN Centre for Energy Website",
          organization: "Asean Centre for Energy",
          icon: "ace",
          desc: "Homepage for ACCEPT II news and research data",
          techUsed: ["Wordpress", "HTML", "JavaScript", "CSS"],
          projectLink: "https://aseanenergy.org/",
        },
        {
          name: "ASEAN Climate Change and Energy Project (ACCEPT) Website",
          organization: "Asean Centre for Energy",
          icon: "ace",
          desc: "Homepage for ACE news and research data",
          techUsed: ["Wordpress", "HTML", "JavaScript", "CSS"],
          projectLink: "https://accept.aseanenergy.org/",
        },
      ],
    };
  },
};
app.component("sect-project", sectProject);

// EXPERIENCE
const listOfTaskWorking = {
  template: `
  <li class="list-inside list-disc text-pretty">
    {{ task }}
  </li>
  `,
  props: ["task"],
};
app.component("list-of-task", listOfTaskWorking);

const listOfExperience = {
  template: `
  <div class="p-4 bg-gray-50 rounded shadow content flex">
    <div class="flex items-center justify-center h-18">
      <img class="w-24" :src='"assets/work_logo/" + icon + ".webp"' :alt="icon" />
    </div>
    <div class="mx-2 p-2 w-full">      
      <h4 class="font-bold text-base">{{ perusahaan }} - {{ title }}</h4>
      <p>{{ getDuration() }}</p>
      <ul>
        <list-of-task 
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
app.component("list-of-experience", listOfExperience);

const sectExperience = {
  template: `
  <section id="experience" class="container mx-auto p-6 bg-white shadow-md rounded-lg mb-6">
  <h3 class="text-2xl font-bold mb-4">Experiences</h3>
  <div class="space-y-4">
    <list-of-experience 
      v-for="(working, i) in experienceList" :key="i"
      :perusahaan="working.perusahaan"
      :title="working.title"
      :icon="working.icon"
      :periodeStart="working.periodeStart"
      :periodeEnd="working.periodeEnd"
      :taskList="working.taskList"
    />
  </div>
  </section>
  `,
  data() {
    return {
      experienceList: [
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
            "Conducted evaluation on laboratory participants' study progress",
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
            "Conducted evaluation on laboratory participants' study progress",
          ],
        },
      ],
    };
  },
};
app.component("sect-experience", sectExperience);

const sectContact = {
  template: `
  <section id="contact" class="container mx-auto p-6 bg-white shadow-md rounded-lg mb-6">
    <h3 class="text-2xl font-bold mb-4">Contact Me</h3>
      <p>If you'd like to work together or have any questions, feel free to reach out!</p>
      <form action="mailto:m.arsyad.ikbar.14@gmail.com" method="post" enctype="text/plain" class="mt-4">
      <input type="text" placeholder="Your Name" class="block w-full p-2 mb-4 border rounded" />
      <input type="email" placeholder="Your Email" class="block w-full p-2 mb-4 border rounded" />
      <textarea type="mail" placeholder="Your Message" class="block w-full p-2 mb-4 border rounded"></textarea>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 mr-1 rounded hover:bg-blue-700">Send</button>
      <button type="reset" class="bg-red-600 text-white px-4 py-2 ml-1 rounded hover:bg-blue-700">Reset</button>
    </form>
  </section>
  `,
};
app.component("sect-contact", sectContact);

const footer = {
  template: `
  <footer class="bg-gray-800 text-white p-4 text-center">
  <p>&copy; 2025 {{ information.name }}. All rights reserved.</p>
  </footer>
  `,
  props: ["information"],
};
app.component("cust-footer", footer);

app.mount("#app");
