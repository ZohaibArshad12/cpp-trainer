export const scrollToEl = (hash) => {
  console.log("scroller", hash);
  if (hash) {
    if (hash.includes("?")) {
      const section = hash.split("?")[1];
      setTimeout(() => {
        const el = document.getElementById(section);

        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1000);
    } else {
      let section = hash.split("?")[0];
      section = section.replace("#", "");
      console.log("scroller section", section);
      setTimeout(() => {
        const el = document.getElementById(section);

        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }
};
