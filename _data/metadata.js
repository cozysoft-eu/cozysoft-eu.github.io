const url = process.env.URL ?? "https://cozysoft.eu";
const title = "cozy's Softwareschmiede";

module.exports = {
    de: {
        url,
        title,
        description: "Softwareentwicklung mit glühendem Eisen",
        languageLabel: "sprache",
        language: "deutsch",
        feed: {
            subtitle: "Softwareentwicklung mit glühendem Eisen",
            filename: "feed.xml",
            path: "/feed/de.feed.xml",
            id: "cozysoft.eu",
        },
        jsonfeed: {
            path: "/feed/de.feed.json",
            url: `${url}/feed/de.feed.json`,
        },
        source: {
            label: 'github',
            link: 'https://github.com/cozysoft-eu/cozysoft.eu'
        },
        author: {
            url,
            name: "cozyGalvinism",
            email: "contact@cozysoft.eu",
        },
        posts: {
            title: `Beiträge | ${title}`,
            description: "Meine Beiträge",
        },
        about: {
            title: `Über mich | ${title}`,
        },
        impressum: {
            title: `Impressum | ${title}`,
        },
        datenschutz: {
            title: `Datenschutz | ${title}`,
        },
        tags: {
            verb: "Verschlagwortet",
        }
    },
    en: {
        url,
        title,
        description: "Software development with red-hot iron",
        languageLabel: "language",
        language: "english",
        feed: {
            subtitle: "Software development with red-hot iron",
            filename: "feed.xml",
            path: "/feed/en.feed.xml",
            id: "cozysoft.eu",
        },
        jsonfeed: {
            path: "/feed/en.feed.json",
            url: `${url}/feed/en.feed.json`,
        },
        source: {
            label: 'github',
            link: 'https://github.com/cozysoft-eu/cozysoft.eu'
        },
        author: {
            url,
            name: "cozyGalvinism",
            email: "contact@cozysoft.eu",
        },
        posts: {
            title: `Posts | ${title}`,
            description: "Posts",
        },
        about: {
            title: `About me | ${title}`,
        },
        impressum: {
            title: `Imprint | ${title}`,
        },
        datenschutz: {
            title: `Privacy | ${title}`,
        },
        tags: {
            verb: "Tagged",
        }
    },
};
