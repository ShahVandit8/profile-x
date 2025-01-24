export const initialState = {
    theme: "dark",
    section: "introduction",
    renderMode: "preview",
    sidebar: "open",
    // Introduction State
    introduction: {
        name: "",
        subtitle: "",
        longDescription: "",
        location: "",
        portfolioLink: "",
        email: "",
        resumeLink: "",
        workingOnTitle: "",
        workingOnLink: "",
        learning: "",
        askmeabout: "",
        collaborateOn: "",
        funfact: "",
    },
    // Skills State
    skills: {
        core: [],
        frontend: [],
        backend: [],
        other: [],
        software: [],
        web3: [],
        cloud: [],
    },
    // Socials State
    socials: {
        github: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/github.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/github-dark.svg",
            linkPrefix: "https://www.github.com/",
            linkSuffix: "",
        },
        twitter: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/twitter.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/twitter-dark.svg",
            linkPrefix: "https://www.x.com/",
            linkSuffix: "",
        },
        threads: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/threads.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/threads-dark.svg",
            linkPrefix: "https://www.threads.net/@",
            linkSuffix: "",
        },
        hashnode: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/hashnode.svg",
            linkPrefix: "https://",
            linkSuffix: "",
            linkSuffixTwo: ".hashnode.dev",
        },
        medium: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/medium.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/medium-dark.svg",
            linkPrefix: "http://www.medium.com/",
            linkSuffix: "",
        },
        devdotto: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/devdotto.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/devdotto-dark.svg",
            linkPrefix: "https://www.dev.to/",
            linkSuffix: "",
        },
        linkedin: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/linkedin.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/linkedin-dark.svg",
            linkPrefix: "https://www.linkedin.com/in/",
            linkSuffix: "",
        },
        twitch: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/twitch.svg",
            linkPrefix: "https://www.twitch.tv/",
            linkSuffix: "",
        },
        youtube: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/youtube.svg",
            linkPrefix: "https://www.youtube.com/@",
            linkSuffix: "",
        },
        discord: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/discord.svg",
            linkPrefix: "https://discord.com/users/",
            linkSuffix: "",
        },
        instagram: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/instagram.svg",
            linkPrefix: "http://www.instagram.com/",
            linkSuffix: "",
        },
        facebook: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/facebook.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/facebook-dark.svg",
            linkPrefix: "https://www.facebook.com/",
            linkSuffix: "",
        },
        dribbble: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/dribbble.svg",
            linkPrefix: "https://www.dribbble.com/",
            linkSuffix: "",
        },
        behance: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/behance.svg",
            linkPrefix: "https://www.behance.com/",
            linkSuffix: "",
        },
        codesandbox: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/codesandbox.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/codesandbox-dark.svg",
            linkPrefix: "https://codesandbox.io/u/",
            linkSuffix: "",
        },
        codepen: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/codepen.svg",
            darkPath:
                "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/codepen-dark.svg",
            linkPrefix: "https://www.codepen.io/",
            linkSuffix: "",
        },
        stackoverflow: {
            path: "https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/stackoverflow.svg",
            linkPrefix: "https://www.stackoverflow.com/users/",
            linkSuffix: "",
        },
    },
    badges: {
        twitterFollowers: {
            selected: false,
        },
        githubFollowers: {
            selected: false,
        },
        githubVisits: {
            selected: false,
        },
        githubStatsCard: {
            selected: false,
            stars: true,
            commits: true,
            prs: true,
            issues: true,
            contribs: true,
            privateCommits: true,
        },
        githubCommitsGraph: {
            selected: false,
        },
        githubStreak: {
            selected: false,
        },
        twitchStatus: {
            selected: false,
        },
        topLangsCard: {
            selected: false,
        },
        reposCard: {
            selected: false,
            repoOne: "",
            repoTwo: null,
            repoThree: null,
            reporFour: null,
        },
        cardStyle: {
            selected: false,
            titleColor: "0891b2",
            titleColorEdit: false,
            textColor: "ffffff",
            textColorEdit: false,
            iconColor: "0891b2",
            iconColorEdit: false,
            bgColor: "1c1917",
            bgColorEdit: false,
            hideBorder: true,
            showIcons: true,
        },
    },
    support: {
        buymeacoffee: {
            linkSuffix: "",
            previewIMG: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        },
        kofi: {
            previewIMG: "https://storage.ko-fi.com/cdn/kofi2.png?v=3",
            linkSuffix: "",
        }
    },
    popOutMenuOpen: false,
    modal: false,
};

// Icon Store
export const iconData = {
    core: [
        {
            name: "C",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg",
            iTag: "c",
            link: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170",
        },
        {
            name: "C++",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg",
            iTag: "cplusplus",
            link: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170",
        },
        {
            name: "C#",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg",
            iTag: "csharp",
            link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        },
        {
            name: "Coffeescript",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/coffeescript-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/coffeescript-colored-dark.svg",
            iTag: "coffeescript",
            link: "https://coffeescript.org/",
        },
        {
            name: "Dart",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg",
            iTag: "dart",
            link: "https://dart.dev/",
        },
        {
            name: "Git",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
            iTag: "git",
            link: "https://git-scm.com/",
        },
        {
            name: "Go",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg",
            iTag: "go",
            link: "https://go.dev/doc/",
        },
        {
            name: "Java",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg",
            iTag: "java",
            link: "https://www.oracle.com/java/",
        },
        {
            name: "JavaScript",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
            iTag: "javascript",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            name: "Kotlin",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kotlin-colored.svg",
            iTag: "kotlin",
            link: "https://kotlinlang.org/",
        },
        {
            name: "Perl",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/perl-colored.svg",
            iTag: "perl",
            link: "https://www.perl.org/",
        },
        {
            name: "PHP",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg",
            iTag: "php",
            link: "https://www.php.net/",
        },
        {
            name: "Python",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
            iTag: "python",
            link: "https://www.python.org/",
        },
        {
            name: "rlang",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/rlang-colored.svg",
            iTag: "rlang",
            link: "https://www.r-project.org/",
        },
        {
            name: "Ruby",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ruby-colored.svg",
            iTag: "ruby",
            link: "https://www.ruby-lang.org/en/",
        },
        {
            name: "Rust",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/rust-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/rust-colored-dark.svg",
            iTag: "rust",
            link: "https://www.rust-lang.org/",
        },
        {
            name: "Swift",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/swift-colored.svg",
            iTag: "swift",
            link: "https://developer.apple.com/swift/",
        },
        {
            name: "TypeScript",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
            iTag: "typescript",
            link: "https://www.typescriptlang.org/",
        },
    ],
    frontend: [
        {
            name: "HTML5",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
            iTag: "html5",
            link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        },
        {
            name: "React",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
            iTag: "react",
            link: "https://reactjs.org/",
        },
        {
            name: "NextJs",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg",
            iTag: "nextjs",
            link: "https://nextjs.org/docs",
        },
        {
            name: "Vue",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg",
            iTag: "vuejs",
            link: "https://vuejs.org/",
        },
        {
            name: "Nuxtjs",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg",
            iTag: "nuxtjs",
            link: "https://nuxtjs.org/",
        },
        {
            name: "Gatsby",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg",
            iTag: "gatsby",
            link: "https://www.gatsbyjs.com/",
        },
        {
            name: "Angular",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg",
            iTag: "angularjs",
            link: "https://angular.io/",
        },
        {
            name: "JQuery",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg",
            iTag: "jquery",
            link: "https://jquery.com/",
        },
        {
            name: "CSS3",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
            iTag: "css3",
            link: "https://www.w3.org/TR/CSS/#css",
        },
        {
            name: "Sass",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg",
            iTag: "sass",
            link: "https://sass-lang.com/",
        },
        {
            name: "TailwindCSS",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
            iTag: "tailwindcss",
            link: "https://tailwindcss.com/",
        },
        {
            name: "Chakra UI",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/chakra-colored.svg",
            iTag: "chakra",
            link: "https://chakra-ui.com/",
        },
        {
            name: "Bootstrap",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
            iTag: "bootstrap",
            link: "https://getbootstrap.com/",
        },
        {
            name: "Material UI",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg",
            iTag: "materialui",
            link: "https://mui.com/",
        },
        {
            name: "Redux",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg",
            iTag: "redux",
            link: "https://redux.js.org/",
        },
        {
            name: "Webpack",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg",
            iTag: "webpack",
            link: "https://webpack.js.org/",
        },
        {
            name: "Babel",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored-dark.svg",
            iTag: "babel",
            link: "https://babeljs.io/",
        },
        {
            name: "Svelte",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte-colored.svg",
            iTag: "svelte",
            link: "https://svelte.dev/",
        },
        {
            name: "Vite",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg",
            iTag: "vite",
            link: "https://vitejs.dev/",
        },
        {
            name: "Remix",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/remix-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/remix-colored-dark.svg",
            iTag: "remix",
            link: "https://remix.run/",
        },
    ],
    backend: [
        {
            name: "NodeJS",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
            iTag: "nodejs",
            link: "https://nodejs.org/en/",
        },
        {
            name: "Express",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg",
            iTag: "express",
            link: "https://expressjs.com/",
        },
        {
            name: "Fast API",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg",
            iTag: "fastapi",
            link: "https://fastapi.tiangolo.com/",
        },
        {
            name: "GraphQL",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg",
            iTag: "graphql",
            link: "https://graphql.org/",
        },
        {
            name: "Oracle",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/oracle-colored.svg",
            iTag: "oracle",
            link: "https://www.oracle.com/uk/index.html",
        },
        {
            name: "NestJS",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg",
            iTag: "nestjs",
            link: "https://docs.nestjs.com/",
        },
        {
            name: "MongoDB",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
            iTag: "mongodb",
            link: "https://www.mongodb.com/",
        },
        {
            name: "MySQL",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
            iTag: "mysql",
            link: "https://www.mysql.com/",
        },
        {
            name: "PostgreSQL",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
            iTag: "postgresql",
            link: "https://www.postgresql.org/",
        },
        {
            name: "Firebase",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
            iTag: "firebase",
            link: "https://firebase.google.com/",
        },
        {
            name: "Appwrite",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/appwrite-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/appwrite-colored-dark.svg",
            iTag: "appwrite",
            link: "https://appwrite.io/",
        },
        {
            name: "Heroku",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg",
            iTag: "heroku",
            link: "https://www.heroku.com/",
        },
        {
            name: "Flask",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask-colored-dark.svg",
            iTag: "flask",
            link: "https://flask.palletsprojects.com/en/2.0.x/",
        },
        {
            name: "Render",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/render-colored.svg",
            iTag: "render",
            link: "https://render.com/",
        },
        {
            name: "Supabase",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg",
            iTag: "supabase",
            link: "https://supabase.io/",
        },
    ],
    other: [
        {
            name: ".NET",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg",
            iTag: "dot-net",
            link: "https://dotnet.microsoft.com/en-us/",
        },
        {
            name: "Django",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored-dark.svg",
            iTag: "django",
            link: "https://www.djangoproject.com/",
        },
        {
            name: "Laravel",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg",
            iTag: "laravel",
            link: "https://laravel.com/",
        },
        {
            name: "Flutter",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg",
            iTag: "flutter",
            link: "https://flutter.dev/",
        },
        {
            name: "Amazon Web Services",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored-dark.svg",
            iTag: "aws",
            link: "https://aws.amazon.com",
        },
        {
            name: "Arduino",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arduino-colored.svg",
            iTag: "arduino",
            link: "https://store.arduino.cc/?gclid=Cj0KCQjw2eilBhCCARIsAG0Pf8uueBifykWcsSS4LPESeGQfxGVKJYnzV7bz471XfknQJy_1VINVWM8aAkLtEALw_wcB",
        },
        {
            name: "Blender",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/blender-colored.svg",
            iTag: "blender",
            link: "https://www.blender.org/",
        },
        {
            name: "Digital Ocean",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/digitalocean-colored.svg",
            iTag: "digitalocean",
            link: "https://www.digitalocean.com",
        },
        {
            name: "Docker",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
            iTag: "docker",
            link: "https://www.docker.com/",
        },
        {
            name: "Linux",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg",
            iTag: "linux",
            link: "https://www.linux.org",
        },
        {
            name: "MacOS",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/macos-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/macos-colored-dark.svg",
            iTag: "macos",
            link: "https://apple.com",
        },
        {
            name: "PyTorch",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/pytorch-colored.svg",
            iTag: "pytorch",
            link: "https://pytorch.org/",
        },
        {
            name: "Raspberry Pi",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/raspberrypi-colored.svg",
            iTag: "raspberrypi",
            link: "https://www.raspberrypi.org/",
        },
        {
            name: "TensorFlow",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tensorflow-colored.svg",
            iTag: "tensorflow",
            link: "https://www.tensorflow.org/",
        },
    ],
    software: [
        {
            name: "Photoshop",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored-dark.svg",
            iTag: "photoshop",
            link: "https://www.adobe.com/uk/products/photoshop.html",
        },
        {
            name: "Illustrator",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/illustrator-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/illustrator-colored-dark.svg",
            iTag: "illustrator",
            link: "https://www.adobe.com/uk/products/illustrator.html",
        },
        {
            name: "After Effects",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aftereffects-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aftereffects-colored-dark.svg",
            iTag: "aftereffects",
            link: "https://www.adobe.com/uk/products/aftereffects.html",
        },
        {
            name: "Premiere Pro",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/premierepro-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/premierepro-colored-dark.svg",
            iTag: "premierepro",
            link: "https://www.adobe.com/uk/products/premiere.html",
        },
        {
            name: "XD",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/xd-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/xd-colored-dark.svg",
            iTag: "xd",
            link: "https://www.adobe.com/uk/products/xd.html",
        },
        {
            name: "Figma",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
            iTag: "figma",
            link: "https://www.figma.com/",
        },
        {
            name: "Sketch",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sketch-colored.svg",
            iTag: "sketch",
            link: "https://www.sketch.com/",
        },
    ],
    web3: [
        {
            name: "Uniswap",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/uniswap-colored.svg",
            iTag: "uniswap",
            link: "https://uniswap.org/",
        },
        {
            name: "AAVE",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aave-colored.svg",
            iTag: "aave",
            link: "https://aave.com/",
        },
        {
            name: "Sushiswap",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sushiswap-colored.svg",
            iTag: "sushiswap",
            link: "https://www.sushi.com/",
        },
        {
            name: "MetaMask",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/metamask-colored.svg",
            iTag: "metamask",
            link: "https://metamask.io/",
        },
        {
            name: "Argent",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/argent-colored.svg",
            iTag: "argent",
            link: "https://www.argent.xyz/",
        },
        {
            name: "Nansen",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nansen-colored.svg",
            iTag: "nansen",
            link: "https://www.nansen.ai/",
        },
        {
            name: "Chainlink",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/chainlink-colored.svg",
            iTag: "chainlink",
            link: "https://chain.link/",
        },
        {
            name: "The Graph",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/the-graph-colored.svg",
            iTag: "the-graph",
            link: "https://thegraph.com/en/",
        },
        {
            name: "Ethers",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ethers-colored.svg",
            iTag: "ethers",
            link: "https://ethers.io",
        },
        {
            name: "Web3Js",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/web3js-colored.svg",
            iTag: "web3js",
            link: "https://web3js.readthedocs.io/en/v1.7.1/#",
        },
        {
            name: "Alchemy",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/alchemy-colored.svg",
            iTag: "alchemy",
            link: "https://docs.alchemy.com/alchemy/documentation/alchemy-web3",
        },
        {
            name: "Hardhat",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/hardhat-colored.svg",
            iTag: "hardhat",
            link: "https://hardhat.org/",
        },
        {
            name: "Truffle",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/truffle-colored.svg",
            iTag: "truffle",
            link: "https://trufflesuite.com",
        },
        {
            name: "IPFS",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ipfs-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ipfs-colored-dark.svg",
            iTag: "ipfs",
            link: "https://ipfs.io/",
        },
        {
            name: "Filebase",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/filebase-colored.svg",
            iTag: "filebase",
            link: "https://filebase.com/",
        },
        {
            name: "Arweave",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arweave-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arweave-colored-dark.svg",
            iTag: "arweave",
            link: "https://www.arweave.org/",
        },
        {
            name: "Ethereum",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ethereum-colored.svg",
            iTag: "ethereum",
            link: "https://ethereum.org/en/",
        },
        {
            name: "Polygon",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/polygon-colored.svg",
            iTag: "polygon",
            link: "https://polygon.technology/",
        },
        {
            name: "Arbitrum",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arbitrum-colored.svg",
            iTag: "arbitrum",
            link: "https://portal.arbitrum.one/",
        },
        {
            name: "Avalanche",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/avalanche-colored.svg",
            iTag: "avalanche",
            link: "https://www.avax.network/",
        },
        {
            name: "Near",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/near-colored.svg",
            darkPath:
                "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/near-colored-dark.svg",
            iTag: "near",
            link: "https://near.academy/",
        },
        {
            name: "Flow",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flow-colored.svg",
            iTag: "flow",
            link: "https://www.onflow.org/",
        },
        {
            name: "Solana",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/solana-colored.svg",
            iTag: "solana",
            link: "https://solana.com/",
        },
        {
            name: "Terra",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/terra-colored.svg",
            iTag: "terra",
            link: "https://www.terra.money/",
        },
    ],
    cloud: [
        {
            name: "Google Cloud",
            path: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg",
            iTag: "googlecloud",
            link: "https://cloud.google.com/",
        },
    ],
};


const AppReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case "POPULATE_STATE":
            return action.value

        case "SHOW_SECTION":
            return { ...state, section: action.payload }

        case "SELECT_RENDER_MODE":
            return { ...state, renderMode: action.payload }

        case "ADD_INTRODUCTION":
            return {
                ...state,
                introduction: {
                    ...state.introduction,
                    [payload.title]: payload.value,
                },
            };

        case "ADD_SOCIAL_PROFILE":
            return {
                ...state,
                socials: {
                    ...state.socials,
                    [action.payload.title]: {
                        ...state.socials[action.payload.title],
                        linkSuffix: action.payload.value,
                    },
                },
            };

        case "ADD_SKILL":
            return {
                ...state,
                skills: {
                    ...state.skills,
                    [action.payload.type]: [
                        ...state.skills[action.payload.type].slice(
                            0,
                            action.payload.position
                        ),
                        action.payload.icon,
                        ...state.skills[action.payload.type].slice(action.payload.position),
                    ],
                },
            };
        case "REMOVE_SKILL":
            return {
                ...state,
                skills: {
                    ...state.skills,
                    [action.payload.type]: state.skills[action.payload.type].filter(
                        (item) => item.name !== action.payload.icon.name
                    ),
                },
            };

        case "ADD_SUPPORT":
            return {
                ...state,
                support: {
                    ...state.support,
                    [action.payload.title]: {
                        ...state.support[action.payload.title],
                        linkSuffix: action.payload.value,
                    },
                },
            };

        case "CHANGE_THEME":
            return { ...state, theme: payload };

        case "SIDEBAR_TOGGLE":
            return { ...state, sidebar: payload };

        default:
            throw new Error();
    }


}

export default AppReducer;