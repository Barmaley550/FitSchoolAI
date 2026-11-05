const artPalette = {
  night: "#172134", floor: "#26344a", purple: "#9b79ed", mint: "#55cfa6",
  skin: "#d99b76", shirt: "#7255b7", shorts: "#283950", line: "#cfbaff"
};

function illustration(type, options = {}) {
  const { bad = false, compact = false, hideSkeleton = false } = options;
  const id = `grad-${type}-${Math.random().toString(36).slice(2, 7)}`;
  const defs = `<defs>
    <linearGradient id="${id}" x2="0" y2="1"><stop stop-color="#293750"/><stop offset="1" stop-color="#131a29"/></linearGradient>
    <linearGradient id="${id}-light" x2="0" y2="1"><stop stop-color="#8b75bd" stop-opacity=".45"/><stop offset="1" stop-color="#8b75bd" stop-opacity="0"/></linearGradient>
    <radialGradient id="${id}-glow"><stop stop-color="#9b79ed" stop-opacity=".34"/><stop offset="1" stop-color="#9b79ed" stop-opacity="0"/></radialGradient>
  </defs>`;
  const gym = `<path d="M0 260h400V0H0z" fill="url(#${id})"/><path d="M0 0h400v260H0z" fill="url(#${id}-light)"/>
    <path d="M0 194h400v66H0z" fill="#172337"/><path d="M0 222h400M36 193v67m326-67v67" stroke="#71819a" stroke-opacity=".14"/>
    <path d="M45 32h310v144H45z" fill="none" stroke="#b6a4ed" stroke-opacity=".13" stroke-width="2"/>
    <path d="M75 36v136m250-136v136M45 95h310" stroke="#d1c8ee" stroke-opacity=".1"/>
    <path d="M0 212h400M28 202h344" stroke="#d1c8ee" stroke-opacity=".12"/>`;
  const posePoints = (pose = "squat", error = false) => {
    const points = {
      head: [213, 60], shoulder: [211, 93], hip: [199, 144],
      elbowL: [169, 117], handL: [151, 145], elbowR: [246, 115], handR: [265, 141],
      kneeL: [170, 179], footL: [143, 205], kneeR: [236, 177], footR: [265, 204]
    };
    if (pose === "pushup") Object.assign(points, {
      head: [93, 150], shoulder: [130, 163], hip: [213, 180],
      elbowL: [148, 193], handL: [117, 211], elbowR: [170, 210], handR: [144, 226],
      kneeL: [252, 186], footL: [310, 187], kneeR: [265, 201], footR: [319, 202]
    });
    if (pose === "plank") Object.assign(points, {
      head: [76, 144], shoulder: [116, 159], hip: [211, 165],
      elbowL: [136, 192], handL: [105, 212], elbowR: [153, 205], handR: [122, 224],
      kneeL: [259, 165], footL: [314, 166], kneeR: [268, 181], footR: [323, 183]
    });
    if (pose === "stand") Object.assign(points, {
      head: [208, 48], shoulder: [207, 84], hip: [203, 143],
      elbowL: [176, 112], handL: [166, 157], elbowR: [240, 110], handR: [253, 153],
      kneeL: [189, 190], footL: [178, 229], kneeR: [218, 191], footR: [232, 229]
    });
    if (pose === "jumping-jacks") Object.assign(points, {
      head: [200, 46], shoulder: [200, 83], hip: [200, 143],
      elbowL: [166, 57], handL: [145, 24], elbowR: [234, 57], handR: [255, 24],
      kneeL: [164, 184], footL: [126, 228], kneeR: [236, 184], footR: [274, 228]
    });
    if (error && pose === "squat") Object.assign(points, { kneeL: [208, 180], kneeR: [190, 180], footL: [143, 205], footR: [265, 204] });
    if (error && pose === "pushup") Object.assign(points, { hip: [220, 222], kneeL: [254, 206], footL: [310, 190], kneeR: [268, 217], footR: [319, 203] });
    if (error && pose === "jumping-jacks") Object.assign(points, {
      elbowL: [169, 79], handL: [164, 103], elbowR: [232, 78], handR: [239, 103],
      kneeL: [184, 180], footL: [177, 222], kneeR: [216, 180], footR: [223, 222]
    });
    return points;
  };
  const skeleton = (pose = "squat", error = false) => {
    const { head, shoulder, hip, elbowL, handL, elbowR, handR, kneeL, footL, kneeR, footR } = posePoints(pose, error);
    const upperPath = `M${head[0]} ${head[1] + 18}L${shoulder}M${shoulder}L${elbowL}L${handL}M${shoulder}L${elbowR}L${handR}M${shoulder[0]} ${shoulder[1] + 10}L${hip}M${hip[0] - 18} ${hip[1]}L${hip[0] + 18} ${hip[1]}`;
    const legPath = `M${hip}L${kneeL}L${footL}M${hip}L${kneeR}L${footR}`;
    const joints = [shoulder, elbowL, handL, elbowR, handR, hip, kneeL, footL, kneeR, footR];
    const upperColor = error && pose !== "squat" ? "#ff7777" : "#dfcaff";
    return `<g fill="none" stroke="#171b2d" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" opacity=".72"><path d="${upperPath}"/><path d="${legPath}"/></g><g fill="none" stroke="${upperColor}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="${upperPath}"/></g><g fill="none" stroke="${error ? "#ff7777" : "#dfcaff"}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="${legPath}"/></g><g fill="#fff" stroke-width="2.5">${joints.map(([x, y], index) => `<circle cx="${x}" cy="${y}" r="${index === 0 || index === 5 || index === 6 || index === 8 ? 5 : 4}" stroke="${error && (pose !== "squat" || index >= 6) ? "#ff5757" : "#a376ff"}"/>`).join("")}</g>`;
  };
  const person = (pose = "squat", error = false) => {
    const { head, shoulder, hip, elbowL, handL, elbowR, handR, kneeL, footL, kneeR, footR } = posePoints(pose, error);
    const stroke = pose === "pushup" || pose === "plank" ? 17 : 19;
    return `<g stroke="#28374d" stroke-width="${stroke + 7}" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M${shoulder}L${hip}"/><path d="M${shoulder}L${elbowL}L${handL}"/><path d="M${shoulder}L${elbowR}L${handR}"/>
      <path d="M${hip}L${kneeL}L${footL}"/><path d="M${hip}L${kneeR}L${footR}"/>
      </g><g stroke="${artPalette.shirt}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M${shoulder}L${hip}"/><path d="M${shoulder}L${elbowL}L${handL}"/><path d="M${shoulder}L${elbowR}L${handR}"/>
      </g><g stroke="${artPalette.shorts}" stroke-width="${stroke - 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M${hip}L${kneeL}L${footL}"/><path d="M${hip}L${kneeR}L${footR}"/>
      </g><circle cx="${head[0]}" cy="${head[1]}" r="17" fill="${artPalette.skin}"/><path d="M${head[0]-15} ${head[1]-3}q5-22 25-11l7 10q-16-5-32 4" fill="#332c35"/>`;
  };
  let contents = gym;
  if (["squat", "form", "class", "teacher", "motivation", "pushup", "plank", "jumping-jacks"].includes(type)) {
    contents += `<ellipse cx="204" cy="216" rx="98" ry="17" fill="#080d16" opacity=".34"/><ellipse cx="205" cy="116" rx="150" ry="120" fill="url(#${id}-glow)"/>`;
    if (type === "class") {
      contents += `<g opacity=".82">${person("stand")}${skeleton("stand")}<g transform="translate(-24 48) scale(.57)">${person("stand")}</g><g transform="translate(190 48) scale(.57)">${person("stand")}</g></g><path d="M65 190h270" stroke="#b7a5e8" stroke-opacity=".3"/>`;
    } else if (type === "teacher") {
      contents += `<rect x="45" y="35" width="310" height="180" rx="12" fill="#111a29" stroke="#8f7bc2" stroke-opacity=".4"/><path d="M62 65h92M62 84h134M62 102h75M62 125h150" stroke="#7d8ba1" stroke-opacity=".38" stroke-width="5" stroke-linecap="round"/><rect x="237" y="57" width="96" height="92" rx="8" fill="#251e3d"/><path d="M251 126l20-28 15 13 19-33" stroke="#b49cff" stroke-width="4" fill="none"/><circle cx="266" cy="165" r="20" fill="#d99b76"/><path d="M237 211q4-37 29-37t32 37" fill="#7255b7"/>`;
    } else if (type === "motivation") {
      contents += `<path d="M45 175q60-100 117-30t96-32 99-17" stroke="#9b79ed" stroke-opacity=".7" stroke-width="3" fill="none"/><g fill="#eac66d"><circle cx="80" cy="135" r="5"/><circle cx="164" cy="151" r="5"/><circle cx="258" cy="113" r="5"/></g>${person("stand")}${skeleton("stand")}`;
    } else {
      const pose = ["pushup", "plank", "jumping-jacks"].includes(type) ? type : "squat";
      const incorrect = bad || type === "form";
      contents += person(pose, incorrect);
      if (!hideSkeleton) contents += skeleton(pose, incorrect);
    }
  } else if (type === "food") {
    contents = `<path d="M0 0h400v260H0z" fill="url(#${id})"/><circle cx="195" cy="150" r="105" fill="#dce0dd"/><circle cx="195" cy="150" r="90" fill="#f3f0e9"/><ellipse cx="165" cy="135" rx="37" ry="28" fill="#a85d36"/><path d="M130 131q26-45 67-10l-6 28q-39 17-62-18" fill="#c87840"/><path d="M211 122q32-15 55 14t-6 37q-27 8-55-12z" fill="#c4a26a"/><circle cx="234" cy="143" r="8" fill="#8dab63"/><circle cx="253" cy="155" r="8" fill="#71a464"/><circle cx="214" cy="159" r="7" fill="#e18c65"/><path d="M186 183q30-10 55 11" stroke="#f3f0e9" stroke-width="8" stroke-linecap="round"/><circle cx="320" cy="72" r="33" fill="#d2dfd8" opacity=".2"/><path d="M317 53v39m-9-24h18" stroke="#e9eee9" stroke-opacity=".55" stroke-width="3"/>`;
  } else if (type === "music") {
    contents = `<path d="M0 0h400v260H0z" fill="url(#${id})"/><circle cx="200" cy="130" r="120" fill="#764f8e" opacity=".42"/><circle cx="200" cy="101" r="54" fill="url(#${id}-light)"/><circle cx="200" cy="102" r="37" fill="#f6bd95" opacity=".86"/><path d="M0 215l99-94 72 75 84-100 145 121v43H0z" fill="#382a51"/><path d="M0 238l117-87 55 52 76-63 152 94v26H0z" fill="#202b41"/><path d="M32 44h336M52 60h296M68 76h264" stroke="#fff" stroke-opacity=".1"/><text x="200" y="233" text-anchor="middle" fill="#f5e6da" font-size="12" font-family="sans-serif" letter-spacing="3">LATVIAN SUMMER</text>`;
  } else if (type === "reward") {
    contents = `<path d="M0 0h400v260H0z" fill="url(#${id})"/><circle cx="200" cy="131" r="110" fill="#a37aea" opacity=".1"/><path d="M146 91h108v91H146z" rx="8" fill="#c9a65a"/><path d="M153 98h94v78h-94z" fill="#e7c576"/><path d="M173 99q0 34 27 42 27-8 27-42" fill="#f8df98"/><path d="M190 144v48m20-48v48" stroke="#ad493c" stroke-width="12"/><path d="M177 196h47" stroke="#e9c775" stroke-width="8" stroke-linecap="round"/><path d="M200 45l8 17 19 3-14 13 4 18-17-9-17 9 4-18-14-13 19-3z" fill="#f4cf77"/><g fill="#bdadf4"><circle cx="87" cy="74" r="3"/><circle cx="310" cy="65" r="4"/><circle cx="304" cy="190" r="3"/><circle cx="97" cy="179" r="4"/></g>`;
  } else if (type === "wrapped") {
    contents = `<path d="M0 0h400v260H0z" fill="url(#${id})"/><circle cx="198" cy="129" r="115" fill="#9a63c6" opacity=".23"/><circle cx="198" cy="129" r="83" fill="none" stroke="#e8c67b" stroke-opacity=".75" stroke-width="2"/><circle cx="198" cy="129" r="61" fill="none" stroke="#d9b8ff" stroke-opacity=".55"/><path d="M75 185l51-82 43 47 37-62 115 102" fill="none" stroke="#d4b8ff" stroke-opacity=".7" stroke-width="3"/><path d="M200 47l8 17 19 3-14 13 4 18-17-9-17 9 4-18-14-13 19-3z" fill="#f0c66a"/><text x="200" y="223" fill="white" text-anchor="middle" font-size="15" font-weight="700" font-family="sans-serif" letter-spacing="2">YOUR YEAR IN MOTION</text>`;
  } else if (type === "solution") {
    contents = `<path d="M0 0h400v260H0z" fill="transparent"/><circle cx="200" cy="129" r="100" fill="url(#${id}-glow)"/><circle cx="200" cy="129" r="68" fill="#211c37" stroke="#a78bfa" stroke-opacity=".45"/><ellipse cx="198" cy="199" rx="38" ry="7" fill="#080d16" opacity=".45"/><g transform="translate(50 30) scale(.72)">${person("stand")}${skeleton("stand")}</g>`;
  } else if (type === "cta") {
    contents = `<path d="M0 0h220v250H0z" fill="transparent"/><circle cx="110" cy="125" r="80" fill="url(#${id}-glow)"/><circle cx="110" cy="125" r="54" fill="none" stroke="#a78bfa" stroke-width="2"/><path d="M110 57l10 23 25 2-19 17 6 25-22-13-22 13 6-25-19-17 25-2z" fill="#eac66d"/>`;
  } else {
    contents += person("squat", bad);
  }
  const height = compact ? 220 : 260;
  const aspect = type === "pushup" ? "xMidYMid meet" : "xMidYMid slice";
  return `<svg class="art-svg" viewBox="0 0 400 ${height}" preserveAspectRatio="${aspect}" role="img" aria-label="${type} illustration" xmlns="http://www.w3.org/2000/svg">${defs}${contents}</svg>`;
}

document.querySelectorAll("[data-illustration]").forEach((el) => {
  el.querySelector(":scope > svg.art-svg")?.remove();
  el.insertAdjacentHTML("afterbegin", illustration(el.dataset.illustration, { bad: el.dataset.bad === "true" }));
});

function mealIllustration(day) {
  const dishes = [
    `<path d="M86 89q5-31 38-34 38-4 49 20 11 22-11 38-29 17-57 2-23-11-19-26" fill="#a94f31" stroke="#713b2c" stroke-width="3"/><path d="M96 79q25-20 61-5m-57 20q26-16 59-2m-44 19 41-15" fill="none" stroke="#e7a36c" stroke-width="5" stroke-linecap="round"/><g fill="#e3c47e" stroke="#c89d51" stroke-width="2"><path d="M186 61l20-10 19 13-7 19-25 2z"/><path d="M211 83l19-9 20 13-8 18-25 2z"/><path d="M185 99l19-9 20 12-7 19-25 1z"/><path d="M232 55l18-7 16 13-6 18-23 1z"/></g><g fill="#4f955b" stroke="#367449" stroke-width="2"><ellipse cx="278" cy="70" rx="15" ry="10" transform="rotate(-30 278 70)"/><ellipse cx="292" cy="84" rx="15" ry="10" transform="rotate(28 292 84)"/><ellipse cx="270" cy="95" rx="16" ry="10" transform="rotate(-18 270 95)"/><ellipse cx="290" cy="108" rx="15" ry="10" transform="rotate(30 290 108)"/><ellipse cx="260" cy="116" rx="14" ry="9" transform="rotate(-24 260 116)"/></g><circle cx="251" cy="101" r="7" fill="#d95145"/><circle cx="304" cy="68" r="6" fill="#d95145"/><path d="M75 132q18-17 37-1m-20 11q13-12 26-2" fill="none" stroke="#77a65e" stroke-width="5" stroke-linecap="round"/>`,
    `<path d="M79 91q7-28 41-34 40-7 70 9 18 10 5 31-20 30-73 26-48-4-43-32" fill="#d39a50" stroke="#a6783b" stroke-width="3"/><path d="M95 77q35-24 77-8m-73 21q39-23 79-6m-64 20q25-15 56-5" fill="none" stroke="#f7e1b4" stroke-width="5" stroke-linecap="round"/><g fill="#f4eee0" stroke="#e4d7bd" stroke-width="2"><ellipse cx="240" cy="62" rx="14" ry="10"/><ellipse cx="264" cy="68" rx="15" ry="10"/><ellipse cx="284" cy="81" rx="14" ry="10"/><ellipse cx="253" cy="87" rx="15" ry="10"/><ellipse cx="276" cy="102" rx="14" ry="10"/><ellipse cx="234" cy="108" rx="15" ry="10"/><ellipse cx="257" cy="119" rx="14" ry="9"/></g><path d="M226 63q12-8 22 0m3 24q12-8 23 0m-30 20q12-8 23 0" fill="none" stroke="#e7b86c" stroke-width="2"/><g fill="#4e9660" stroke="#39794b" stroke-width="2"><circle cx="205" cy="115" r="12"/><circle cx="218" cy="102" r="11"/><circle cx="227" cy="119" r="10"/><circle cx="296" cy="111" r="10"/><circle cx="300" cy="59" r="8"/></g><path d="M196 126l8-8 9 7-7 9z" fill="#e55f4d"/><path d="M301 90q16-10 25 0-8 11-24 10-9-3-1-10" fill="#e4c85d"/>`,
    `<path d="M83 93q-5-43 37-45 38-2 53 24 11 22-11 38-35 22-65 2-13-8-14-19" fill="#cc8745" stroke="#a85d36" stroke-width="3"/><path d="M97 71q25-16 53 1m-56 12q27-15 57 1m-45 18q23-10 42 1" fill="none" stroke="#f3d37e" stroke-width="5" stroke-linecap="round"/><g fill="none" stroke="#f3d37e" stroke-width="7" stroke-linecap="round"><path d="M171 62q19-16 31 0t-2 19-18-1 6-14 17 2"/><path d="M188 99q18-17 30-1t-2 18-17-1 6-14 17 1"/><path d="M135 111q17-15 29 0t-2 17-16-1 5-13 16 1"/></g><g fill="#ae503e" stroke="#813e32" stroke-width="2"><circle cx="250" cy="63" r="17"/><circle cx="282" cy="77" r="16"/><circle cx="252" cy="99" r="16"/><circle cx="286" cy="111" r="14"/></g><path d="M242 61q8-10 16 0m-9 37q7-9 15 0m22-22q7-8 14 0" fill="none" stroke="#e8896e" stroke-width="3" stroke-linecap="round"/><g fill="#4d925b" stroke="#36744a" stroke-width="2"><circle cx="215" cy="119" r="12"/><circle cx="229" cy="108" r="11"/><circle cx="237" cy="123" r="10"/><circle cx="300" cy="95" r="8"/></g><circle cx="218" cy="65" r="6" fill="#6fa566"/><circle cx="207" cy="81" r="5" fill="#d95a48"/>`,
    `<path d="M108 76q5 62 92 66 83-3 92-66l-16 4q-12 44-76 48-64-4-76-48z" fill="url(#soup-bowl-${day})" stroke="#d8dce0" stroke-width="3"/><ellipse cx="200" cy="78" rx="99" ry="34" fill="#fffdf7" stroke="#e1d8c8" stroke-width="4"/><ellipse cx="200" cy="77" rx="88" ry="25" fill="url(#soup-stock-${day})"/><path d="M133 71q16-10 31 1t30 0 29 0 29 0 15-2" fill="none" stroke="#f7d888" stroke-width="4" stroke-linecap="round"/><g fill="#f3d9a0"><path d="M152 70l12-8 12 9-10 7z"/><path d="M199 84l11-8 12 8-8 8z"/><path d="M239 67l10-6 10 8-9 7z"/></g><g fill="#df7554"><path d="M177 61l10-6 8 8-8 7z"/><path d="M220 73l9-7 9 7-7 8z"/><path d="M153 84l8-6 8 7-7 7z"/></g><g fill="#75a56a"><ellipse cx="184" cy="78" rx="3" ry="6" transform="rotate(-35 184 78)"/><ellipse cx="211" cy="62" rx="3" ry="6" transform="rotate(35 211 62)"/><ellipse cx="246" cy="82" rx="3" ry="6" transform="rotate(-25 246 82)"/><ellipse cx="197" cy="66" rx="3" ry="6" transform="rotate(-10 197 66)"/></g><path d="M123 39q-8-12 0-22m27 22q-8-12 0-22" fill="none" stroke="#fff4dd" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"/><g transform="rotate(-12 312 77)"><rect x="293" y="52" width="31" height="48" rx="4" fill="#c99553"/><rect x="297" y="56" width="23" height="39" rx="3" fill="#f1d49b"/><path d="M301 62v26m9-26v26" stroke="#fff0ce" stroke-width="3" stroke-linecap="round"/></g><g fill="#609764"><ellipse cx="81" cy="100" rx="8" ry="16" transform="rotate(-34 81 100)"/><ellipse cx="94" cy="115" rx="7" ry="13" transform="rotate(32 94 115)"/><ellipse cx="70" cy="125" rx="6" ry="11" transform="rotate(-10 70 125)"/></g>`,
    `<path d="M91 77q2-26 28-29l22 10 10 26q-4 24-28 28-26 3-32-18-3-9 0-17" fill="#a95332" stroke="#713b2c" stroke-width="3"/><path d="M112 54q15 11 28 9m-35 15q10 9 25 10" fill="none" stroke="#e9a365" stroke-width="5" stroke-linecap="round"/><path d="M137 58q13-8 20-20m-17 23q18-5 25-16" fill="none" stroke="#f0eadc" stroke-width="7" stroke-linecap="round"/><g fill="#d89a43" stroke="#a96c2d" stroke-width="2"><path d="M195 80l13-28 21 24-11 23-24 3z"/><path d="M225 91l16-34 21 27-12 25-25 1z"/><path d="M253 79l16-26 21 25-12 23-25 1z"/><path d="M206 111l14-25 21 23-12 21-24 1z"/><path d="M241 112l13-26 23 22-13 22-23 0z"/></g><path d="M203 78l6-14m22 27 7-18m23 2 7-13m-53 53 6-12m27 15 5-12" stroke="#f1cf7c" stroke-width="4" stroke-linecap="round"/><g fill="#d96948" stroke="#a94e37" stroke-width="2"><circle cx="171" cy="111" r="14"/><circle cx="186" cy="125" r="12"/></g><path d="M170 96q-2-8 5-11" stroke="#79a85c" stroke-width="4" stroke-linecap="round"/><circle cx="296" cy="113" r="15" fill="#dc5048"/><path d="M295 98q0-9 8-11m-8 11q-8-8-13-4" stroke="#79a85c" stroke-width="4" stroke-linecap="round"/><path d="M177 129q15-9 28 0m-19 8q11-8 21 0" fill="none" stroke="#568b54" stroke-width="6" stroke-linecap="round"/>`
  ];
  return `<svg class="art-svg meal-art day-${day}" viewBox="0 0 400 180" role="img" aria-label="Meal photo for the selected school menu" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="meal-bg-${day}" x2="0" y2="1"><stop stop-color="#343c54"/><stop offset="1" stop-color="#151b29"/></linearGradient><radialGradient id="meal-glow-${day}"><stop stop-color="#f6c978" stop-opacity=".2"/><stop offset="1" stop-color="#f6c978" stop-opacity="0"/></radialGradient></defs><path fill="url(#meal-bg-${day})" d="M0 0h400v180H0z"/><ellipse cx="200" cy="88" rx="175" ry="115" fill="url(#meal-glow-${day})"/><ellipse cx="200" cy="148" rx="143" ry="16" fill="#080d16" opacity=".55"/><ellipse cx="200" cy="91" rx="150" ry="74" fill="#d8dce0"/><ellipse cx="200" cy="89" rx="133" ry="61" fill="#f3f0e9"/>${dishes[day]}</svg>`;
}

const site = document.getElementById("site");
const demo = document.getElementById("app-demo");
const screen = document.getElementById("app-screen");
const radioMiniPlayer = document.getElementById("radio-mini-player");
const modalRoot = document.getElementById("modal-root");
const zoomControl = document.getElementById("zoom-control");
const zoomSlider = document.getElementById("zoom-slider");
const zoomLevel = document.getElementById("zoom-level");
const embeddedPage = window.self !== window.top;
document.body.classList.toggle("embedded-page", embeddedPage);
let savedZoom = null;
try {
  savedZoom = Number(localStorage.getItem("fitschool-page-zoom"));
} catch (error) {
  console.warn("The saved page zoom could not be read.", error);
}
function setPageZoom(value, save = true) {
  const zoom = Math.min(100, Math.max(50, Math.round(Number(value) / 5) * 5));
  site.style.zoom = `${zoom}%`;
  demo.style.zoom = `${zoom}%`;
  zoomSlider.value = String(zoom);
  zoomLevel.value = `${zoom}%`;
  zoomSlider.setAttribute("aria-valuetext", `${zoom} percent`);
  if (!save) return;
  try {
    localStorage.setItem("fitschool-page-zoom", String(zoom));
  } catch (error) {
    console.warn("The page zoom preference could not be saved.", error);
  }
}
const initialZoom = Number.isFinite(savedZoom) && savedZoom >= 50 && savedZoom <= 100
  ? savedZoom
  : embeddedPage ? 80 : 100;
setPageZoom(initialZoom, false);
zoomSlider.addEventListener("input", () => setPageZoom(zoomSlider.value));
zoomControl.addEventListener("click", (event) => {
  const stepButton = event.target.closest("[data-zoom-step]");
  if (stepButton) {
    setPageZoom(Number(zoomSlider.value) + Number(stepButton.dataset.zoomStep));
  } else if (event.target.closest("[data-zoom-reset]")) {
    setPageZoom(100);
  }
});
let guidedTourStep = -1;
const guidedTourSteps = [
  {
    screen: "signin",
    role: null,
    title: "A familiar sign-in screen",
    copy: "This is a visual preview. The demo works without an account, and no credentials are saved or sent."
  },
  {
    screen: "dashboard",
    role: "student",
    title: "Mark's personal dashboard",
    copy: "Mark can see his progress and today's suggested workout at a glance. Let's open his Squats session."
  },
  {
    screen: "pose",
    role: "student",
    title: "Movement analysis in action",
    copy: "See the pose map overlaid on Mark's squat. The highlighted knees show a form issue. This is a sample visualization, not live camera analysis."
  },
  {
    screen: "error",
    role: "student",
    title: "Feedback that helps you improve",
    copy: "The app explains what to adjust and offers a practical cue: gently press your knees outward as you lower."
  },
  {
    screen: "cafeteria",
    role: "student",
    title: "Lunch plans at a glance",
    copy: "Browse the school menu by day, see what's served, and check sample nutrition estimates. The figures and menu are demo content."
  },
  {
    screen: "music",
    role: "student",
    title: "Music from Baltic radio",
    copy: "Choose an online station from Latvia, Lithuania, or Estonia. Playback is optional; the radio stays available while you explore other screens."
  },
  {
    screen: "rewards",
    role: "student",
    title: "Small wins, visible progress",
    copy: "Workouts and weekly streaks can earn FitPoints, which students can use for sample rewards. Offers shown here are for the demo."
  },
  {
    screen: "teacher",
    role: "teacher",
    title: "A view for teachers, too",
    copy: "Teachers can review class activity and explore the exercise, assignment, and analytics sections from one dashboard."
  }
];
const state = {
  screen: "welcome",
  role: null,
  tab: "home",
  teacherTab: "Overview",
  createdExercises: [],
  selectedExercise: "Squats",
  selectedDay: 0,
  wrappedIndex: 0,
  wrappedMode: "personal",
  radioStatus: "ready",
  radioError: "",
  radioVolume: 0.25,
  radioStation: "ehr",
  fromSignin: false,
  toast: ""
};
const radioStations = {
  ehr: { name: "EHR", description: "European Hit Radio", url: "https://29333.live.streamtheworld.com/EHR.mp3", website: "https://www.ehr.fm/radio/ehr" },
  mix: { name: "Mix FM", description: "Mix FM 102.7", url: "https://live.relaxfm.lv/07", website: "https://mixfm.lv/" },
  swh: { name: "Radio SWH", description: "Radio SWH Latvia", url: "https://live.radioswh.lv:8443/swh_lv", website: "https://radioswh.lv/" },
  spin: { name: "Spin FM", description: "Radio SWH Spin FM", url: "https://live.radioswh.lv:8443/spinmp3", website: "https://www.spinfm.lv/" },
  power: { name: "Power Hit Radio", description: "Power Hit Radio Lithuania", url: "https://ice.leviracloud.eu/phr192-mp3", website: "https://powerhitradio.tv3.lt/" },
  sky: { name: "Sky Plus", description: "Sky Plus Estonia", url: "https://skymedia-live.bitflip.ee/SKYPLUS", website: "https://sky.ee/skyplus" }
};
const radioAudio = document.getElementById("radio-audio") || new Audio();
let radioRequestId = 0;
let radioPending = false;
let radioConnectTimer;
radioAudio.volume = state.radioVolume;
radioAudio.addEventListener("playing", () => {
  clearTimeout(radioConnectTimer);
  radioPending = false;
  state.radioStatus = "playing";
  state.radioError = "";
  renderRadioMiniPlayer();
  if (!demo.hidden && state.screen === "music") render();
});
radioAudio.addEventListener("pause", () => {
  if (state.radioStatus !== "playing" && !(state.radioStatus === "connecting" && !radioPending)) return;
  state.radioStatus = "paused";
  renderRadioMiniPlayer();
  if (!demo.hidden && state.screen === "music") render();
});
radioAudio.addEventListener("error", () => {
  clearTimeout(radioConnectTimer);
  radioPending = false;
  state.radioStatus = "error";
  state.radioError = `Couldn't connect to ${radioStations[state.radioStation].name}. Check your connection and try again.`;
  console.error(`${radioStations[state.radioStation].name} radio stream failed to load.`, radioAudio.error);
  renderRadioMiniPlayer();
  if (!demo.hidden && state.screen === "music") render();
});

function renderRadioMiniPlayer() {
  const isPlaying = state.radioStatus === "playing";
  const station = radioStations[state.radioStation];
  const labels = { connecting: "CONNECTING", error: "STREAM UNAVAILABLE", paused: "RADIO PAUSED", playing: "LIVE RADIO", ready: "" };
  const stations = Object.entries(radioStations).map(([id, item]) => `<button type="button" class="radio-mini-station-option" role="option" data-radio-station-option="${id}" aria-selected="${id === state.radioStation}"><span>${item.name}</span><span class="radio-mini-station-check" aria-hidden="true">✓</span></button>`).join("");
  radioMiniPlayer.innerHTML = `<div class="radio-mini-meta"><i class="radio-mini-dot ${state.radioStatus}"></i><span><b>${station.name}</b><small aria-live="polite">${labels[state.radioStatus] || station.description}</small></span>${state.radioStatus === "error" ? `<a class="radio-mini-open" href="${station.website}" target="_blank" rel="noopener noreferrer" aria-label="Open ${station.name} website">↗</a>` : ""}</div>
    <div class="radio-mini-station"><button type="button" class="radio-mini-station-trigger" data-radio-menu-toggle aria-label="Choose radio station" aria-haspopup="listbox" aria-expanded="false"><span>${station.name}</span><span class="radio-mini-station-chevron" aria-hidden="true">⌄</span></button><div class="radio-mini-station-menu" role="listbox" aria-label="Choose radio station" hidden>${stations}</div></div>
    <button class="radio-mini-toggle" data-action="toggle-radio" aria-label="${isPlaying ? "Pause radio" : "Play radio"}" ${state.radioStatus === "connecting" ? "disabled" : ""}>${isPlaying ? "Ⅱ" : "▶"}</button>
    <label class="radio-mini-volume"><span class="visually-hidden">Radio volume</span><input type="range" min="0" max="1" step="0.01" value="${state.radioVolume}" aria-label="Radio volume" aria-valuetext="${Math.round(state.radioVolume * 100)} percent"><output>${Math.round(state.radioVolume * 100)}%</output></label>
    <button class="radio-mini-stop" data-action="stop-radio" aria-label="Stop radio">■</button>`;
  document.body.classList.toggle("radio-player-active", true);
  document.body.classList.toggle("radio-demo-active", !demo.hidden);
  screen.classList.toggle("radio-player-active", !demo.hidden);
}

function startRadio() {
  const requestId = ++radioRequestId;
  const station = radioStations[state.radioStation];
  clearTimeout(radioConnectTimer);
  radioPending = true;
  state.radioStatus = "connecting";
  state.radioError = "";
  if (radioAudio.src !== station.url) {
    radioAudio.pause();
    radioAudio.src = station.url;
    radioAudio.load();
  }
  renderRadioMiniPlayer();
  if (!demo.hidden && state.screen === "music") render();
  radioAudio.play().catch((error) => {
    if (requestId !== radioRequestId) return;
    clearTimeout(radioConnectTimer);
    radioPending = false;
    if (error.name === "AbortError" && radioAudio.paused) {
      state.radioStatus = "paused";
      renderRadioMiniPlayer();
      if (!demo.hidden && state.screen === "music") render();
      return;
    }
    state.radioStatus = "error";
    state.radioError = `Couldn't start ${station.name}. Check your connection and try again.`;
    console.error(`${station.name} radio playback failed.`, error);
    renderRadioMiniPlayer();
    if (!demo.hidden && state.screen === "music") render();
  });
  radioConnectTimer = setTimeout(() => {
    if (requestId !== radioRequestId || state.radioStatus !== "connecting") return;
    ++radioRequestId;
    radioPending = false;
    state.radioStatus = "error";
    state.radioError = `${station.name} is taking too long to connect. Try again or open the station website.`;
    console.error(`${station.name} radio stream did not start before the connection timeout.`);
    radioAudio.pause();
    renderRadioMiniPlayer();
    if (!demo.hidden && state.screen === "music") render();
  }, 12000);
}

function selectRadioStation(stationId) {
  if (!Object.hasOwn(radioStations, stationId) || stationId === state.radioStation) return;
  const shouldResume = !radioAudio.paused || state.radioStatus === "connecting";
  ++radioRequestId;
  clearTimeout(radioConnectTimer);
  radioPending = false;
  state.radioStation = stationId;
  state.radioError = "";
  state.radioStatus = shouldResume ? "connecting" : radioAudio.paused && state.radioStatus === "paused" ? "paused" : "ready";
  if (shouldResume) {
    startRadio();
    return;
  }
  radioAudio.pause();
  radioAudio.src = radioStations[stationId].url;
  radioAudio.load();
  renderRadioMiniPlayer();
  if (!demo.hidden && state.screen === "music") render();
}

renderRadioMiniPlayer();

const exercises = [
  { name: "Squats", amount: "30 repetitions", type: "squat", duration: "30 reps" },
  { name: "Push-ups", amount: "20 repetitions", type: "pushup", duration: "20 reps" },
  { name: "Jumping Jacks", amount: "20 repetitions", type: "jumping-jacks", duration: "20 reps" }
];
const wrappedStories = {
  personal: [
    { kicker: "FITSCHOOL AI PRESENTS", title: "Your Year<br>in Motion", copy: "Every little step added up to something amazing.", number: "2026", symbol: "✦" },
    { kicker: "YOU SHOWED UP", title: "Workouts<br>Completed", copy: "That's a whole lot of strength in the making.", number: "84", symbol: "↗", chart: { title: "WORKOUTS BY QUARTER", bars: [["Q1", 16], ["Q2", 19], ["Q3", 23], ["Q4", 26]] } },
    { kicker: "LOOK AT YOU GO", title: "Tasks<br>Finished", copy: "You kept your promises to yourself.", number: "126", symbol: "✓" },
    { kicker: "YOUR GO-TO MOVE", title: "Favorite<br>Exercise", copy: "Strong legs, stronger confidence.", number: "SQUATS", symbol: "✳" },
    { kicker: "MOMENTS TO CELEBRATE", title: "Achievements unlocked", copy: "You earned every single one.", number: "32", symbol: "★" },
    { kicker: "UNTIL NEXT TIME", title: "See You<br>Next Year!", copy: "Keep moving. Your next chapter is waiting.", number: "♥", symbol: "✦" }
  ],
  class: [
    { kicker: "CLASS 10 B · FITSCHOOL AI", title: "Our Year<br>in Motion", copy: "A year of showing up, moving together, and cheering each other on.", number: "2026", symbol: "✦" },
    { kicker: "STRONGER TOGETHER", title: "Class Workouts<br>Completed", copy: "Every workout added to the class total.", number: "844", symbol: "↗", chart: { title: "WORKOUTS BY QUARTER", bars: [["Q1", 160], ["Q2", 192], ["Q3", 218], ["Q4", 274]] } },
    { kicker: "THE WHOLE CLASS", title: "Students<br>Taking Part", copy: "Most of the class joined in and kept moving.", number: "20/24", symbol: "◉", progress: { label: "CLASS PARTICIPATION", value: 83 } },
    { kicker: "CLASS FAVORITE", title: "Most-Loved<br>Workout", copy: "The move that brought the most energy to class.", number: "SQUATS", symbol: "✳" },
    { kicker: "A CLASS TO CELEBRATE", title: "Shared Milestones<br>Reached", copy: "Small wins became something to celebrate together.", number: "32", symbol: "★" },
    { kicker: "UNTIL NEXT TIME", title: "See You<br>Next Year!", copy: "Keep moving together. There are more milestones ahead.", number: "♥", symbol: "✦" }
  ]
};

function header({ profile = true } = {}) {
  return `<div class="app-header"><div class="app-brand"><span class="brand-mark"><span></span><span></span><span></span></span><span class="brand-wordmark">FIT<span class="brand-light">SCHOOL</span><small>AI</small></span></div>${profile ? `<button class="app-avatar" data-action="profile" aria-label="Open profile">M</button>` : ""}</div>`;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}
function appView(content, { nav = null, className = "" } = {}) {
  return `<div class="app-view ${className}">${content}${nav ? bottomNav(nav) : ""}</div>`;
}
function bottomNav(active) {
  const tabs = [["home", "⌂", "Home"], ["workouts", "◉", "Workouts"], ["cafeteria", "▤", "Cafeteria"], ["music", "♫", "Music"], ["rewards", "◇", "Rewards"]];
  if (state.role === "teacher") tabs.push(["teacher", "▤", "Teacher"]);
  return `<nav class="bottom-nav" aria-label="App navigation">${tabs.map(([id, icon, label]) => `<button class="${active === id ? "active" : ""}" data-tab="${id}" aria-label="${label}">${icon}<span>${label}</span></button>`).join("")}</nav>`;
}
function backButton(label = "Back") {
  return `<div class="app-header"><button class="signin-back" data-action="back">${label}</button><button class="app-avatar" data-action="profile" aria-label="Open profile">M</button></div>`;
}
function scene(type, extraClass = "") {
  return `<div class="${extraClass}">${illustration(type, { bad: type === "bad-squat" })}</div>`;
}
function renderWelcome() {
  const signIn = state.screen === "signin";
  if (!signIn) {
    return appView(`<div class="app-scroll welcome-view">
      <div class="app-brand"><span class="brand-mark"><span></span><span></span><span></span></span> FITSCHOOL AI</div>
      <div class="app-kicker">A NEW WAY TO MOVE</div><h1 class="app-title">WELCOME TO<br>FITSCHOOL AI.</h1>
      <p class="app-subtitle">Your smarter school fitness experience starts here.</p>
      <div class="role-choice">
        <button class="role-card ${state.role === "student" ? "selected" : ""}" data-role="student"><span>◉</span><b>STUDENT</b><small>Workouts, progress<br>and rewards.</small></button>
        <button class="role-card ${state.role === "teacher" ? "selected" : ""}" data-role="teacher"><span>▤</span><b>TEACHER</b><small>Exercises and<br>class progress.</small></button>
      </div>
      <div class="welcome-actions"><button class="app-button secondary" data-action="signin">SIGN IN</button><button class="app-button" data-action="explore" data-explore="student">EXPLORE AS STUDENT</button><button class="app-button ghost" data-action="explore" data-explore="teacher">EXPLORE AS TEACHER</button></div>
      <p class="welcome-note">DEMO MODE · NO ACCOUNT NEEDED</p>
    </div>`);
  }
  return appView(`<div class="app-scroll welcome-view">
    ${header({ profile: false })}
    <button class="signin-back" data-action="welcome">← Back to role selection</button>
    <div class="app-kicker" style="margin-top:24px">DEMO SIGN IN</div><h1 class="app-title">GOOD TO SEE<br>YOU AGAIN.</h1>
    <p class="app-subtitle">Sign in is a visual preview. Use any details or explore the demo without an account.</p>
    <form class="signin-form" data-form="signin"><label class="field-label">EMAIL OR STUDENT ID</label><input class="app-input" type="text" placeholder="mark@school.edu" autocomplete="username"><label class="field-label">PASSWORD</label><input class="app-input" type="password" placeholder="Enter any password" autocomplete="current-password"><button class="app-button" type="submit">CONTINUE TO DEMO</button></form>
    <button class="app-button secondary" data-action="welcome">EXPLORE WITHOUT SIGNING IN</button>
    <p class="welcome-note">NO CREDENTIALS ARE SAVED OR SENT ANYWHERE.</p>
  </div>`);
}

function renderDashboard() {
  const greetingName = state.role === "teacher" ? "Ms. Carter" : "Mark";
  return appView(`<div class="app-scroll">
    ${header()}
    <p class="app-hello">MONDAY, OCTOBER 26 · 10 B</p><h1 class="app-title">Hello, ${greetingName}! <span style="color:#eac66d">✦</span></h1><p class="app-subtitle">Ready to move today?</p>
    <div class="balance-card app-card" style="margin-top:14px"><div><small>YOUR FITPOINTS BALANCE</small><strong>1,240 <em>↗ +50 this week</em></strong></div><div class="point-icon">✦</div></div>
    <div class="app-section-title">YOUR DAILY GOAL <button class="app-section-action" data-action="workouts">VIEW ALL ↗</button></div>
    <div class="goal-card app-card"><div class="goal-art">${illustration("squat")}</div><span class="app-kicker">TODAY'S TRAINING</span><h3>Squats</h3><div class="goal-bottom"><span><strong>0 / 30</strong> repetitions</span><button data-action="start-workout">START →</button></div><div class="progress-track"><span style="width:0%"></span></div></div>
    <div class="app-section-title">CLASS RANKING <small>10 B</small></div>
    <div class="ranking-card app-card"><div class="rank-badge">#2</div><div><b>Your class is #2</b><small>You're moving up — keep going!</small></div><span>↗ 1</span></div>
    <div class="app-section-title">YOUR PROGRESS <small>THIS MONTH</small></div>
    <div class="stats-row"><div class="stat-card app-card"><span class="stat-icon">◉</span><strong>84</strong><small>Workouts completed</small></div><div class="stat-card app-card"><span class="stat-icon">⌁</span><strong>14.2h</strong><small>Time in motion</small></div></div>
    <div class="app-section-title">RECENT ACHIEVEMENTS <button class="app-section-action" data-action="profile">SEE ALL</button></div>
    <div class="achievement-row"><div class="achievement app-card"><span class="achievement-icon">✦</span><div><b>First Workout</b><small>Just getting started</small></div></div><div class="achievement app-card"><span class="achievement-icon">⚡</span><div><b>Consistency</b><small>7-day streak</small></div></div></div>
    <button class="dashboard-wrapped app-card" data-action="wrapped"><span class="dashboard-wrapped-icon">✦</span><span class="dashboard-wrapped-copy"><b>YOUR YEAR, IN MOTION</b><small>See your personal and class recap</small></span><span class="dashboard-wrapped-arrow">↗</span></button>
  </div>`, { nav: "home" });
}

function renderWorkouts() {
  const selected = exercises.find((exercise) => exercise.name === state.selectedExercise) || exercises[0];
  if (state.screen === "detail") {
    const guide = {
      squat: {
        steps: ["Stand with feet shoulder-width apart.", "Lower your hips while keeping your chest lifted.", "Press through your feet and stand tall."],
        checks: ["Knee alignment", "Squat depth", "Body stability"]
      },
      pushup: {
        steps: ["Place your hands just wider than your shoulders.", "Lower your chest with your body in one straight line.", "Press the floor away to return to the start."],
        checks: ["Body alignment", "Elbow control", "Core stability"]
      },
      "jumping-jacks": {
        steps: ["Stand tall with your feet together and arms at your sides.", "Jump your feet apart as you raise your arms overhead.", "Jump back to the starting position with control."],
        checks: ["Arm extension", "Landing control", "Movement rhythm"]
      }
    }[selected.type];
    return appView(`<div class="app-scroll">
      <div class="detail-visual">${illustration(selected.type)}<button class="back-circle" data-action="workouts" aria-label="Back to workouts">←</button></div>
      <span class="app-kicker">TODAY'S EXERCISE · ${String(exercises.indexOf(selected) + 1).padStart(2, "0")} OF 03</span><h1 class="app-title">${selected.name.toUpperCase()}.</h1><p class="app-subtitle">Build strength with a steady, confident movement.</p>
      <div class="app-section-title">HOW TO PERFORM</div>
      <div class="instruction-list">${guide.steps.map((step, index) => `<div class="instruction"><span>${index + 1}</span>${step}</div>`).join("")}</div>
      <div class="app-section-title">WHAT AI CHECKS <small>ON-DEVICE</small></div>
      <div class="check-grid">${guide.checks.map((check) => `<div class="check-tile app-card"><span>⌁</span><b>${check}</b></div>`).join("")}</div>
    </div><div class="screen-bottom"><button class="app-button" data-action="start-workout">START WORKOUT</button></div>`);
  }
  return appView(`<div class="app-scroll">${header()}<span class="app-kicker">YOUR PERSONAL TRAINING PLAN</span><h1 class="app-title">WORKOUTS.</h1><p class="app-subtitle">Movement made for you. One rep at a time.</p>
    <div class="assignment-banner app-card" style="margin-top:14px"><div><span>TODAY'S TRAINING</span><span>✦ TEACHER ASSIGNED</span></div><h3>3 Exercises</h3><p>Estimated time: 8 min · Move at your own pace.</p></div>
    <div class="app-section-title">YOUR EXERCISES <small>3 TOTAL</small></div>
    <div class="exercise-list">${exercises.map((exercise, index) => `<button class="exercise-card app-card" data-exercise="${exercise.name}"><div class="exercise-thumb">${illustration(exercise.type)}</div><div class="exercise-info"><b>${exercise.name}</b><small>${exercise.amount} · ${index === 0 ? "Form analysis" : "Your own pace"}</small></div><span class="exercise-arrow">›</span></button>`).join("")}</div>
    <div class="app-section-title">YOUR STREAK <small>7 DAYS 🔥</small></div><div class="app-card" style="padding:13px"><p class="app-subtitle">You're building a great habit. Keep showing up for yourself.</p></div>
  </div>`, { nav: "workouts" });
}

function renderPose() {
  const selected = exercises.find((exercise) => exercise.name === state.selectedExercise) || exercises[0];
  const target = selected.duration.split(" ")[0];
  const checks = selected.type === "squat" ? ["Knee Alignment", "Squat Depth", "Body Stability"] : selected.type === "pushup" ? ["Body Alignment", "Elbow Control", "Core Stability"] : ["Arm Extension", "Landing Control", "Movement Rhythm"];
  const showSampleIssue = guidedTourStep === 2;
  const poseTracker = showSampleIssue ? `<svg class="pose-tracker-overlay pose-tracker-alert" viewBox="0 0 400 260" aria-hidden="true">
      <g class="pose-tracker-limb-shadow"><path d="M213 78L211 93L199 144"/><path d="M211 93L169 117L151 145"/><path d="M211 93L246 115L265 141"/><path d="M181 144L217 144"/><path d="M199 144L208 180L143 205"/><path d="M199 144L190 180L265 204"/></g>
      <g class="pose-tracker-limbs"><path d="M213 78L211 93L199 144"/><path d="M211 93L169 117L151 145"/><path d="M211 93L246 115L265 141"/><path d="M181 144L217 144"/><path d="M199 144L208 180L143 205"/><path d="M199 144L190 180L265 204"/></g>
      <g class="pose-tracker-joints"><circle cx="211" cy="93" r="3.5"/><circle cx="169" cy="117" r="3"/><circle cx="151" cy="145" r="3"/><circle cx="246" cy="115" r="3"/><circle cx="265" cy="141" r="3"/><circle cx="199" cy="144" r="3.5"/><circle class="tracked-knee" data-tracked-knee="left" cx="208" cy="180" r="4.5"/><circle cx="143" cy="205" r="3"/><circle class="tracked-knee" data-tracked-knee="right" cx="190" cy="180" r="4.5"/><circle cx="265" cy="204" r="3"/></g>
    </svg><div class="pose-tracker-readout"><div class="pose-tracker-readout-head"><span class="pose-tracker-live-dot"></span><span>POSE ESTIMATION · DEMO</span><small>POSE MAP</small></div><div class="pose-tracker-readout-values"><span>KEYPOINTS <b>10/10</b></span><span>L KNEE <b>0.52, 0.69</b></span><span>R KNEE <b>0.48, 0.69</b></span></div></div>` : "";
  return appView(`<div class="pose-screen"><div class="pose-top"><button data-action="pause-workout" aria-label="Exit workout">×</button><span>${selected.name.toUpperCase()}</span><div class="pose-tag">● POSE DETECTED</div></div>
    <div class="pose-visual">${illustration(selected.type, { hideSkeleton: showSampleIssue })}${poseTracker}<div class="pose-counter">12<small>/${target}</small></div><div class="pose-status">✳ FORM CHECK ACTIVE</div>${showSampleIssue ? `<div class="pose-demo-label">DEMO · SAMPLE FORM FEEDBACK</div>` : ""}</div>
    <div class="timer-box"><div><small>TIME ELAPSED</small><strong>01:18</strong></div><div style="text-align:right"><small>REP QUALITY</small><strong style="color:${showSampleIssue ? "#ff8585" : "#66ddb2"}">${showSampleIssue ? "73%" : "98%"}</strong></div></div>
    <div class="form-checks">${checks.map((check, index) => showSampleIssue && index === 0 ? `<div class="form-check needs-attention"><span>${check}</span><b>! CHECK FORM</b></div>` : `<div class="form-check"><span>${check}</span><b>✓ GOOD</b></div>`).join("")}</div>
    <button class="app-button" data-action="show-error">VIEW FORM TIP</button>
  </div>`);
}

function renderError() {
  const selected = exercises.find((exercise) => exercise.name === state.selectedExercise) || exercises[0];
  const feedback = {
    squat: ["KNEES CAVING IN", "Your knees are moving inward. Try to maintain a more stable position and track your knees over your toes.", "Press your knees gently outward as you lower."],
    pushup: ["HIPS OUT OF LINE", "Your hips are dropping out of line. Keep your shoulders, hips and heels steady throughout each push-up.", "Brace your core and squeeze your glutes."],
    "jumping-jacks": ["FULL RANGE OF MOTION", "Your arms and feet aren't reaching the full jumping-jack position. Open your stance and extend your arms overhead with each jump.", "Land softly with your feet apart as you reach both arms overhead."]
  }[selected.type];
  return appView(`<div class="app-scroll">${backButton("× Exit workout")}<span class="app-kicker" style="color:#ff8585">AI FEEDBACK · REP 12</span><h1 class="app-title" style="font-size:20px">A QUICK FORM TIP.</h1><p class="app-subtitle">Every rep is a chance to learn. Take a look at this movement.</p>
    <div class="compare-row"><div class="compare-card"><div class="compare-image">${illustration(selected.type, { bad: true })}</div><label>YOUR FORM</label></div><div class="compare-card correct"><div class="compare-image">${illustration(selected.type)}</div><label>CORRECT FORM</label></div></div>
    <div class="issue-card"><b>↘ ${feedback[0]}</b><p>${feedback[1]}</p></div>
    <div class="app-section-title">TRY THIS</div><div class="instruction"><span>1</span>${feedback[2]}</div>
    <div style="display:flex;gap:8px;margin-top:16px"><button class="app-button secondary" data-action="retry">TRY AGAIN</button><button class="app-button" data-action="completed">CONTINUE</button></div>
  </div>`);
}
function renderCompleted() {
  const selected = exercises.find((exercise) => exercise.name === state.selectedExercise) || exercises[0];
  const target = selected.duration.split(" ")[0];
  return appView(`<div class="app-scroll" style="padding-top:20px">
    <div class="complete-hero"><div class="complete-medal">✦</div><h2>WORKOUT COMPLETED!</h2><p>You showed up for yourself. That's what counts.</p></div>
    <div class="result-grid"><div class="result-item app-card"><strong>${target}/${target}</strong><small>Repetitions</small></div><div class="result-item app-card"><strong>03:24</strong><small>Duration</small></div><div class="result-item app-card"><strong>✓</strong><small>Form Check</small></div></div>
    <div class="reward-earned app-card"><div class="point-icon">✦</div><div><b>+50 FitPoints earned!</b><small>Added to your balance · 1,290 total</small></div></div>
    <div style="text-align:center;padding:22px 0 16px"><div style="font-size:28px;color:#eac66d">✧ ✦ ✧</div><h2 style="margin:9px 0 6px;font:800 21px var(--display)">GREAT JOB!</h2><p class="app-subtitle">Every rep made you a little stronger.</p></div>
    <button class="app-button" data-action="dashboard">BACK TO DASHBOARD</button>
  </div>`);
}
function renderCafeteria() {
  const days = ["MON", "TUE", "WED", "THU", "FRI"];
  const meals = [["Chicken Cutlet", "Mashed Potatoes", "Vegetable Salad", "Water"], ["Baked Fish", "Brown Rice", "Garden Salad", "Water"], ["Turkey Pasta", "Steamed Vegetables", "Fresh Apple", "Water"], ["Chicken Soup", "Wholegrain Bread", "Cucumber Salad", "Water"], ["Oven Chicken", "Potato Wedges", "Seasonal Fruit", "Water"]];
  const nutrition = [
    { calories: 510, protein: 32, fat: 19, carbs: 48 },
    { calories: 465, protein: 29, fat: 14, carbs: 54 },
    { calories: 520, protein: 30, fat: 17, carbs: 62 },
    { calories: 430, protein: 22, fat: 12, carbs: 56 },
    { calories: 495, protein: 33, fat: 18, carbs: 46 }
  ];
  const today = meals[state.selectedDay];
  const todayNutrition = nutrition[state.selectedDay];
  const icons = [
    ["🍗", "🥔", "🥗", "💧"],
    ["🐟", "🍚", "🥗", "💧"],
    ["🍝", "🥦", "🍎", "💧"],
    ["🍲", "🍞", "🥒", "💧"],
    ["🍗", "🥔", "🍎", "💧"]
  ][state.selectedDay];
  return appView(`<div class="app-scroll">${header()}<span class="app-kicker">GOOD FOOD, GOOD ENERGY</span><h1 class="app-title">SMART<br>CAFETERIA.</h1><p class="app-subtitle">School №40 · Riga, Latvia</p>
    <div class="day-picker">${days.map((day, i) => `<button class="${i === state.selectedDay ? "selected" : ""}" data-day="${i}">${day}<b>${26 + i}</b></button>`).join("")}</div>
    <div class="app-section-title" style="margin-top:6px">ON THE MENU <small>${days[state.selectedDay]}, OCT 2026</small></div>
    <div class="menu-items">${today.map((meal, i) => `<div class="menu-item app-card"><span><i>${icons[i]}</i>${meal}</span><small>${i === 0 ? "Main" : i === 3 ? "Drink" : "Side"}</small></div>`).join("")}</div>
    <div class="app-section-title">A CLOSER LOOK <small>DEMO RECOGNITION</small></div><div class="meal-photo">${mealIllustration(state.selectedDay)}</div>
    <div class="nutrition-card app-card"><div class="nutrition-heading"><b>${today[0].toUpperCase()}</b><span>✓ MENU MATCH</span></div><div class="nutrition-grid"><div><strong>${todayNutrition.calories}</strong><small>kcal</small></div><div><strong>${todayNutrition.protein}g</strong><small>Protein</small></div><div><strong>${todayNutrition.fat}g</strong><small>Fat</small></div><div><strong>${todayNutrition.carbs}g</strong><small>Carbs</small></div></div></div>
    <p class="app-subtitle" style="text-align:center;margin-top:9px;font-size:7px">MATCHED WITH SCHOOL MENU · ESTIMATES FOR DEMO</p>
  </div>`, { nav: "cafeteria" });
}

function renderMusic() {
  const station = radioStations[state.radioStation];
  const stationTitle = `${station.name.toUpperCase()}${/radio/i.test(station.name) ? "" : " RADIO"}.`;
  const radioLabels = { ready: "READY TO PLAY", connecting: `CONNECTING TO ${station.name.toUpperCase()}...`, playing: "LIVE NOW", paused: "RADIO PAUSED", error: "STREAM UNAVAILABLE" };
  const isPlaying = state.radioStatus === "playing";
  return appView(`<div class="app-scroll">${header()}<span class="app-kicker">LIVE RADIO · BALTICS</span><h1 class="app-title">${stationTitle}</h1><p class="app-subtitle">Choose a station and listen while you explore.</p>
    <div class="radio-stations">${Object.entries(radioStations).map(([id, item]) => `<button class="radio-station app-card ${id === state.radioStation ? "selected" : ""}" data-station="${id}" aria-pressed="${id === state.radioStation}"><span class="radio-station-icon">♫</span><span><b>${item.name}</b><small>${item.description}</small></span><i>${id === state.radioStation ? "✓" : "›"}</i></button>`).join("")}</div>
    <div class="album-art"><div class="album-sun"></div><div class="album-mountains"></div><div class="album-label">${station.name.toUpperCase()} · LIVE</div></div>
    <div class="track-info"><h3>${station.name}</h3><p>${station.description}</p></div>
    <div class="radio-status ${state.radioStatus}" aria-live="polite"><i></i><span>${radioLabels[state.radioStatus]}</span></div>
    ${state.radioError ? `<p class="radio-error" role="alert">${state.radioError}</p>` : ""}
    <div class="player-controls"><button class="play-large" data-action="toggle-radio" aria-label="${isPlaying ? "Pause " + station.name + " radio" : "Play " + station.name + " radio"}" ${state.radioStatus === "connecting" ? "disabled" : ""}>${isPlaying ? "Ⅱ" : "▶"}</button></div>
    <label class="volume-control" for="radio-volume"><span>VOLUME</span><input id="radio-volume" type="range" min="0" max="1" step="0.01" value="${state.radioVolume}" aria-label="Radio volume"><output for="radio-volume">${Math.round(state.radioVolume * 100)}%</output></label>
    <div class="bpm-card app-card"><div class="bpm-icon">◉</div><div><b>${station.name.toUpperCase()} LIVE RADIO</b><small>Live broadcast from ${station.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}</small></div><a class="radio-fallback" href="${station.website}" target="_blank" rel="noopener noreferrer">OPEN ↗</a></div>
  </div>`, { nav: "music" });
}

function renderRewards() {
  const offers = [
    { logo: "S", brand: "Sportland", offer: "20% OFF · Sportswear" },
    { logo: "SS", brand: "Sports Store", offer: "10% OFF · Your next visit" },
    { logo: "SC", brand: "Local Sports Club", offer: "FREE TRIAL · 1 week" }
  ];
  return appView(`<div class="app-scroll">${header()}<span class="app-kicker">YOUR EFFORT, REWARDED</span><h1 class="app-title">REWARDS.</h1><p class="app-subtitle">Small wins add up to something great.</p>
    <div class="balance-card app-card" style="margin:14px 0 17px"><div><small>YOUR BALANCE</small><strong>1,240 <span style="font-size:9px;font-weight:600">FitPoints</span></strong><em>Earn more with every workout</em></div><div class="point-icon">✦</div></div>
    <div class="app-section-title">REWARDS FOR YOU <small>3 AVAILABLE</small></div>
    ${offers.map((offer, i) => `<div class="offer-card app-card"><div class="offer-logo">${offer.logo}</div><div class="offer-info"><b>${offer.brand}</b><small>${offer.offer}</small></div><button class="redeem-button" data-redeem="${offer.brand}">REDEEM</button></div>`).join("")}
    <div class="app-section-title">HOW TO EARN <small>KEEP MOVING</small></div><div class="app-card" style="padding:12px"><div class="instruction"><span>✦</span>Complete a workout <b style="margin-left:auto;color:#bda8ff">+50 pts</b></div><div class="instruction" style="margin-top:9px"><span>⚡</span>Keep your weekly streak <b style="margin-left:auto;color:#bda8ff">+25 pts</b></div></div>
  </div>`, { nav: "rewards" });
}

function renderProfile() {
  const name = state.role === "teacher" ? "Ms. Carter" : "Mark Johnson";
  return appView(`<div class="app-scroll">${header()}<div class="profile-top"><div class="profile-avatar">${state.role === "teacher" ? "C" : "M"}</div><h2>${name}</h2><p>10 B · School №40 · Riga</p></div>
    <div class="balance-card app-card" style="margin-bottom:13px"><div><small>FITPOINTS BALANCE</small><strong>1,240 <span style="font-size:9px">FitPoints</span></strong></div><span class="point-icon">✦</span></div>
    <div class="profile-stat-grid"><div class="profile-stat app-card"><b>84</b><small>Workouts</small></div><div class="profile-stat app-card"><b>126</b><small>Tasks finished</small></div><div class="profile-stat app-card"><b>32</b><small>Achievements</small></div><div class="profile-stat app-card"><b>14 hrs</b><small>Active time</small></div></div>
    <div class="app-section-title">YOUR ACHIEVEMENTS <small>32 TOTAL</small></div><div class="achievement-row"><div class="achievement app-card"><span class="achievement-icon">✦</span><div><b>First Workout</b><small>Unlocked</small></div></div><div class="achievement app-card"><span class="achievement-icon">⚡</span><div><b>Consistency</b><small>7-day streak</small></div></div></div>
    <div class="app-section-title">YOUR YEAR, IN MOTION</div><button class="profile-action app-card" data-action="wrapped"><span>✧ &nbsp; FIT WRAPPED 2026</span><b>OPEN RECAP →</b></button>
    <button class="app-button secondary" style="margin-top:13px" data-action="${state.role === "teacher" ? "teacher" : "welcome"}">${state.role === "teacher" ? "BACK TO TEACHER DASHBOARD" : "SWITCH ROLE / EXIT DEMO"}</button>
  </div>`, { nav: state.role === "teacher" ? "home" : "rewards" });
}
function renderWrapped() {
  const stories = wrappedStories[state.wrappedMode];
  const story = stories[state.wrappedIndex];
  const chartMaximum = story.chart ? Math.max(...story.chart.bars.map((bar) => bar[1])) : 1;
  const chart = story.chart ? `<div class="wrapped-chart"><span class="wrapped-chart-title">${story.chart.title}</span><div class="wrapped-bars">${story.chart.bars.map(([label, value]) => `<div class="wrapped-bar-item"><b>${value}</b><span class="wrapped-bar"><i style="height:${Math.round(value / chartMaximum * 100)}%"></i></span><small>${label}</small></div>`).join("")}</div></div>` : "";
  const progress = story.progress ? `<div class="wrapped-participation"><div><span>${story.progress.label}</span><b>${story.progress.value}%</b></div><span class="wrapped-progress-track"><i style="width:${story.progress.value}%"></i></span></div>` : "";
  return appView(`<div class="wrapped-view">
    <div class="wrapped-header"><button class="wrapped-back" data-action="dashboard" aria-label="Back to dashboard">← <span>BACK</span></button><span class="wrapped-demo-badge">DEMO DATA · 2026</span></div>
    <div class="wrapped-mode" role="group" aria-label="Choose recap"><button class="${state.wrappedMode === "personal" ? "active" : ""}" data-wrapped-mode="personal" aria-pressed="${state.wrappedMode === "personal"}">PERSONAL</button><button class="${state.wrappedMode === "class" ? "active" : ""}" data-wrapped-mode="class" aria-pressed="${state.wrappedMode === "class"}">CLASS 10 B</button></div>
    <div class="wrapped-progress" aria-label="Recap progress">${stories.map((_, i) => `<i class="${i <= state.wrappedIndex ? "active" : ""}"></i>`).join("")}</div>
    <div class="wrapped-card" data-mode="${state.wrappedMode}"><span class="app-kicker">${story.kicker}</span><div class="wrapped-symbol">${story.symbol}</div><h2>${story.title}</h2><p>${story.copy}</p><div class="wrapped-number">${story.number}</div>${chart}${progress}<span class="wrapped-demo-note">SAMPLE RECAP · DEMO DATA</span></div>
    <div class="wrapped-controls"><button class="app-button secondary" data-action="story-prev" ${state.wrappedIndex === 0 ? "disabled" : ""}>← BACK</button><button class="app-button" data-action="story-next">${state.wrappedIndex === stories.length - 1 ? "FINISH ✦" : "NEXT →"}</button></div>
  </div>`);
}

function teacherContent() {
  const tab = state.teacherTab;
  if (tab === "Exercises") return `<div class="app-section-title">YOUR EXERCISES <small>${3 + state.createdExercises.length} TOTAL</small></div>${[["Squats", "squat", "30 reps · Medium"], ["Push-ups", "pushup", "20 reps · Medium"], ["Jumping Jacks", "jumping-jacks", "20 reps · Easy"]].map(([item, type, detail]) => `<div class="exercise-card app-card" style="margin-bottom:7px"><div class="exercise-thumb">${illustration(type)}</div><div class="exercise-info"><b>${item}</b><small>${detail}</small></div><span class="exercise-arrow">···</span></div>`).join("")}${state.createdExercises.map((exercise) => `<div class="exercise-card app-card" style="margin-bottom:7px"><div class="exercise-thumb">${illustration("squat")}</div><div class="exercise-info"><b>${escapeHtml(exercise.name)}</b><small>${exercise.reps} reps · ${escapeHtml(exercise.difficulty)} · Published</small>${exercise.description ? `<small>${escapeHtml(exercise.description)}</small>` : ""}</div><span class="exercise-arrow">✓</span></div>`).join("")}<button class="app-button" data-teacher-tab="Create Exercise">+ CREATE EXERCISE</button>`;
  if (tab === "Create Exercise") return `<div class="app-section-title">CREATE EXERCISE <small>NEW ACTIVITY</small></div><form data-form="exercise"><label class="field-label">EXERCISE NAME</label><input class="app-input" name="name" placeholder="e.g. Standing lunges" required><label class="field-label">DESCRIPTION</label><textarea class="app-input" name="description" rows="2" placeholder="Add a few helpful instructions"></textarea><label class="field-label">TARGET REPETITIONS</label><input class="app-input" name="reps" type="number" min="1" placeholder="e.g. 20" required><label class="field-label">DIFFICULTY</label><select class="app-input" name="difficulty"><option>Easy</option><option selected>Medium</option><option>Challenging</option></select><div class="exercise-reference">${illustration("squat")}</div><button class="app-button" type="submit">PUBLISH TO CLASS</button></form>`;
  if (tab === "Assignments") return `<div class="app-section-title">ACTIVE ASSIGNMENTS <small>2 ACTIVE</small></div><div class="assignment-row app-card"><div><b>Today's Training</b><span>● ACTIVE</span></div><p>Squats · Push-ups · Jumping Jacks</p><div class="teacher-progress"><i style="width:68%"></i></div><p style="margin-top:6px">16 of 24 students completed</p></div><div class="assignment-row app-card"><div><b>Weekly Movement Challenge</b><span>● ACTIVE</span></div><p>Complete 3 workouts this week</p><div class="teacher-progress"><i style="width:42%"></i></div><p style="margin-top:6px">10 of 24 students completed</p></div><button class="app-button" data-teacher-tab="Create Exercise">+ CREATE ASSIGNMENT</button>`;
  if (tab === "Analytics") return `<div class="app-section-title">CLASS ANALYTICS <small>THIS MONTH</small></div><div class="teacher-stat-row"><div class="teacher-stat app-card"><b>86%</b><small>Class participation</small></div><div class="teacher-stat app-card"><b>+18%</b><small>Active minutes</small></div></div><div class="app-section-title">WEEKLY ACTIVITY</div><div class="app-card" style="height:135px;padding:15px;display:flex;align-items:end;justify-content:space-around">${[48,73,55,90,68,82,61].map((n, i) => `<div style="height:100%;display:flex;flex-direction:column;justify-content:end;align-items:center;gap:6px"><span style="width:18px;height:${n}%;border-radius:5px 5px 2px 2px;background:${i === 3 ? "#ab8aff" : "#6e55a4"}"></span><small style="font-size:6px;color:#8992a1">${["M","T","W","T","F","S","S"][i]}</small></div>`).join("")}</div><div class="app-section-title">CLASS ENGAGEMENT</div><div class="student-row app-card"><div><b>Students active this week</b><small>20 of 24 students</small></div><span>83%</span></div>`;
  const students = [["MJ", "Mark Johnson", "12 workouts", "92%"], ["AL", "Anna Lee", "10 workouts", "84%"], ["DP", "David Park", "9 workouts", "78%"]];
  return `<div class="app-section-title">${tab === "My Classes" ? "MY CLASSES" : "CLASS PROGRESS"} <small>10 B · 24 STUDENTS</small></div>${tab === "My Classes" ? `<div class="app-card" style="padding:13px;margin-bottom:12px"><span class="app-kicker">CLASS 10 B</span><h3 style="margin:8px 0 4px;font:700 14px var(--display)">Grade 10 · Room 204</h3><p class="app-subtitle">24 students · Physical Education</p><div class="teacher-progress"><i style="width:83%"></i></div></div>` : `<div class="teacher-stat-row"><div class="teacher-stat app-card"><b>16 / 24</b><small>Active assignments</small></div><div class="teacher-stat app-card"><b>84</b><small>Completed workouts</small></div></div>`}
    <div class="app-section-title">STUDENT PROGRESS <button class="app-section-action" data-teacher-tab="My Classes">VIEW CLASS →</button></div>${students.map(([initials, name, workouts, percent]) => `<div class="student-row app-card"><div class="student-mini-avatar">${initials}</div><div><b>${name}</b><small>${workouts}</small></div><span>${percent}</span></div>`).join("")}
    <div class="app-section-title">QUICK ACTION</div><button class="app-button" data-teacher-tab="Create Exercise">+ CREATE EXERCISE</button>`;
}
function renderTeacher() {
  const tabs = ["Overview", "My Classes", "Exercises", "Assignments", "Analytics"];
  return appView(`<div class="app-scroll">${header()}<span class="app-kicker">YOUR SCHOOL · SCHOOL №40</span><h1 class="app-title">TEACHER'S<br>DASHBOARD.</h1><p class="app-subtitle">Welcome back, Ms. Carter.</p>
    <div class="teacher-tabs">${tabs.map((tab) => `<button class="${state.teacherTab === tab ? "active" : ""}" data-teacher-tab="${tab}">${tab}</button>`).join("")}</div>
    ${teacherContent()}
  </div>`, { nav: "teacher" });
}

function render() {
  if (!state.role || state.screen === "welcome" || state.screen === "signin") {
    screen.innerHTML = renderWelcome();
    renderRadioMiniPlayer();
    return;
  }
  if (state.role === "teacher" && state.screen === "teacher") {
    screen.innerHTML = renderTeacher();
    renderRadioMiniPlayer();
    return;
  }
  const views = {
    dashboard: renderDashboard, workouts: renderWorkouts, detail: renderWorkouts,
    pose: renderPose, error: renderError, completed: renderCompleted,
    cafeteria: renderCafeteria, music: renderMusic, rewards: renderRewards,
    profile: renderProfile, wrapped: renderWrapped
  };
  screen.innerHTML = (views[state.screen] || renderDashboard)();
  renderRadioMiniPlayer();
}

function openApp(screenName = "welcome", role = null) {
  site.hidden = true;
  demo.hidden = false;
  document.body.style.overflow = "hidden";
  state.screen = screenName;
  state.role = role;
  render();
}
function closeApp() {
  if (guidedTourStep >= 0) {
    guidedTourStep = -1;
    document.getElementById("guided-tour").hidden = true;
  }
  demo.hidden = true;
  site.hidden = false;
  renderRadioMiniPlayer();
  document.body.style.overflow = "";
  modalRoot.innerHTML = "";
  if (window.location.hash === "#app") history.replaceState(null, "", window.location.pathname + window.location.search);
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
}
function renderGuidedTourStep() {
  const tour = document.getElementById("guided-tour");
  if (guidedTourStep < 0 || guidedTourStep >= guidedTourSteps.length) return;
  const step = guidedTourSteps[guidedTourStep];
  state.selectedExercise = "Squats";
  state.screen = step.screen;
  state.role = step.role;
  if (step.role === "teacher") state.teacherTab = "Overview";
  openApp(step.screen, step.role);

  updateGuidedTourCopy();
  tour.hidden = false;
  tour.querySelector("#guided-tour-title").focus({ preventScroll: true });
}
function updateGuidedTourCopy() {
  if (guidedTourStep < 0 || guidedTourStep >= guidedTourSteps.length) return;
  const tour = document.getElementById("guided-tour");
  const step = guidedTourSteps[guidedTourStep];
  tour.querySelector("#guided-tour-step").textContent = translateString(`STEP ${guidedTourStep + 1} OF ${guidedTourSteps.length}`, document.documentElement.lang);
  tour.querySelector("#guided-tour-title").textContent = translateString(step.title, document.documentElement.lang);
  tour.querySelector("#guided-tour-copy").textContent = translateString(step.copy, document.documentElement.lang);
  tour.querySelector(".guided-tour-progress-track i").style.width = `${((guidedTourStep + 1) / guidedTourSteps.length) * 100}%`;
  tour.querySelector("[data-action='guided-tour-back']").disabled = guidedTourStep === 0;
  const nextButton = tour.querySelector("[data-action='guided-tour-next']");
  nextButton.innerHTML = guidedTourStep === guidedTourSteps.length - 1
    ? `${translateString("Finish tour", document.documentElement.lang)} <span aria-hidden="true">✓</span>`
    : `${translateString("Next", document.documentElement.lang)} <span aria-hidden="true">→</span>`;
}
function startGuidedTour() {
  guidedTourStep = 0;
  modalRoot.innerHTML = "";
  renderGuidedTourStep();
}
function endGuidedTour() {
  if (guidedTourStep < 0) return;
  guidedTourStep = -1;
  document.getElementById("guided-tour").hidden = true;
  closeApp();
}
function advanceGuidedTour(direction) {
  const nextStep = guidedTourStep + direction;
  if (nextStep < 0) return;
  if (nextStep >= guidedTourSteps.length) {
    endGuidedTour();
    return;
  }
  guidedTourStep = nextStep;
  renderGuidedTourStep();
}
document.addEventListener("fitSchoolLanguageChange", updateGuidedTourCopy);
function navigateTab(tab) {
  state.screen = tab === "home" ? "dashboard" : tab === "teacher" ? "teacher" : tab;
  state.tab = tab;
  state.selectedExercise = "Squats";
  if (tab === "teacher") state.teacherTab = "Overview";
  render();
}
function showModal(title, message, content = "", button = "GOT IT") {
  modalRoot.innerHTML = `<div class="modal-backdrop" data-action="modal-backdrop"><div class="app-modal" role="dialog" aria-modal="true" aria-label="${title}"><button class="modal-close" data-action="close-modal" aria-label="Close">×</button><div class="app-kicker">FITSCHOOL AI · DEMO</div><h3>${title}</h3><p>${message}</p>${content}<button class="app-button" style="margin-top:14px" data-action="close-modal">${button}</button></div></div>`;
}
function toast(message) {
  showModal("Nice work!", message, "", "CONTINUE");
}

document.addEventListener("click", (event) => {
  const launchButton = document.querySelector(".guided-tour-launch");
  if (!site.hidden && launchButton && event.target instanceof Element && !launchButton.contains(event.target)) {
    const bounds = launchButton.getBoundingClientRect();
    if (event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom) {
      event.preventDefault();
      startGuidedTour();
      return;
    }
  }
  const activeRadioMenu = radioMiniPlayer.querySelector(".radio-mini-station-menu:not([hidden])");
  if (activeRadioMenu && !radioMiniPlayer.contains(event.target)) closeRadioStationMenu();
  const target = event.target.closest("button, a, [data-action], [data-feature], [data-tab], [data-role], [data-exercise], [data-day], [data-redeem], [data-teacher-tab], [data-wrapped-mode]");
  if (!target) return;
  if (target.dataset.action === "guided-tour-start") { startGuidedTour(); return; }
  if (target.dataset.action === "guided-tour-next") { advanceGuidedTour(1); return; }
  if (target.dataset.action === "guided-tour-back") { advanceGuidedTour(-1); return; }
  if (target.dataset.action === "guided-tour-exit") { endGuidedTour(); return; }
  if (target.matches('a[href^="#"]')) {
    const id = target.getAttribute("href").slice(1);
    if (id && !["app"].includes(id)) document.querySelector(".main-nav")?.classList.remove("open");
    return;
  }
  if (target.dataset.feature) {
    const key = target.dataset.feature;
    const roles = { teacher: "teacher" };
    const screens = { workouts: "workouts", teacher: "teacher", cafeteria: "cafeteria", music: "music", rewards: "rewards", wrapped: "wrapped" };
    const role = roles[key] || "student";
    openApp(screens[key] || "dashboard", role);
    if (key === "teacher") state.teacherTab = "Overview";
    if (key === "wrapped") {
      state.wrappedIndex = 0;
      state.wrappedMode = "personal";
    }
    render();
    return;
  }
  if (target.hasAttribute("data-radio-menu-toggle")) {
    toggleRadioStationMenu(target);
    return;
  }
  if (target.dataset.radioStationOption) {
    closeRadioStationMenu();
    selectRadioStation(target.dataset.radioStationOption);
    return;
  }
  if (target.dataset.tab) { navigateTab(target.dataset.tab); return; }
  if (target.dataset.station) { selectRadioStation(target.dataset.station); return; }
  if (target.dataset.role) { state.role = target.dataset.role; render(); return; }
  if (target.dataset.exercise) { state.selectedExercise = target.dataset.exercise; state.screen = "detail"; render(); return; }
  if (target.dataset.day !== undefined) { state.selectedDay = Number(target.dataset.day); render(); return; }
  if (target.dataset.redeem) {
    const brand = target.dataset.redeem;
    const qr = `<div class="coupon-code"><div class="qr-grid" aria-label="Demo QR code"></div><b>FIT-${brand.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 5)}-2026</b></div>`;
    showModal("Your reward is ready", `${brand} coupon preview. This is a demo coupon and cannot be redeemed.`, qr, "DONE");
    return;
  }
  if (target.dataset.teacherTab) { state.teacherTab = target.dataset.teacherTab; render(); return; }
  if (target.dataset.wrappedMode) {
    state.wrappedMode = target.dataset.wrappedMode;
    state.wrappedIndex = 0;
    render();
    return;
  }
  const action = target.dataset.action;
  if (!action) return;
  switch (action) {
    case "open-app": openApp(); break;
    case "back-site": closeApp(); break;
    case "signin":
      document.querySelector(".main-nav")?.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
      openApp("signin");
      break;
    case "welcome": state.screen = "welcome"; state.role = null; render(); break;
    case "explore": state.role = target.dataset.explore; state.screen = state.role === "teacher" ? "teacher" : "dashboard"; state.teacherTab = "Overview"; render(); break;
    case "switch-role": state.role = null; state.screen = "welcome"; render(); break;
    case "profile": state.screen = "profile"; render(); break;
    case "teacher": state.screen = "teacher"; state.teacherTab = "Overview"; render(); break;
    case "wrapped":
      state.screen = "wrapped";
      state.wrappedIndex = 0;
      state.wrappedMode = "personal";
      render();
      break;
    case "workouts": state.screen = "workouts"; render(); break;
    case "dashboard": state.screen = "dashboard"; render(); break;
    case "back": state.screen = "workouts"; render(); break;
    case "start-workout": state.screen = "pose"; render(); break;
    case "pause-workout":
      modalRoot.innerHTML = "";
      state.screen = "workouts";
      render();
      break;
    case "show-error": state.screen = "error"; render(); break;
    case "retry": state.screen = "pose"; render(); break;
    case "completed": state.screen = "completed"; render(); break;
    case "toggle-radio":
      if (!radioAudio.paused || state.radioStatus === "connecting") {
        ++radioRequestId;
        clearTimeout(radioConnectTimer);
        radioPending = false;
        state.radioStatus = "paused";
        radioAudio.pause();
        renderRadioMiniPlayer();
        if (!demo.hidden && state.screen === "music") render();
      } else {
        startRadio();
      }
      break;
    case "stop-radio":
      ++radioRequestId;
      clearTimeout(radioConnectTimer);
      radioPending = false;
      state.radioStatus = "ready";
      state.radioError = "";
      radioAudio.pause();
      renderRadioMiniPlayer();
      if (!demo.hidden && state.screen === "music") render();
      break;
    case "story-prev": state.wrappedIndex = Math.max(0, state.wrappedIndex - 1); render(); break;
    case "story-next":
      if (state.wrappedIndex < wrappedStories[state.wrappedMode].length - 1) { state.wrappedIndex += 1; render(); }
      else { state.screen = "dashboard"; render(); }
      break;
    case "close-modal": modalRoot.innerHTML = ""; break;
    case "modal-backdrop": if (event.target === target) modalRoot.innerHTML = ""; break;
  }
});

function closeRadioStationMenu(returnFocus = false) {
  const trigger = radioMiniPlayer.querySelector("[data-radio-menu-toggle]");
  const menu = radioMiniPlayer.querySelector(".radio-mini-station-menu");
  if (!trigger || !menu) return;
  menu.hidden = true;
  trigger.setAttribute("aria-expanded", "false");
  if (returnFocus) trigger.focus({ preventScroll: true });
}

function toggleRadioStationMenu(trigger) {
  const menu = radioMiniPlayer.querySelector(".radio-mini-station-menu");
  if (!menu) return;
  const isOpening = menu.hidden;
  closeRadioStationMenu();
  menu.hidden = !isOpening;
  trigger.setAttribute("aria-expanded", String(isOpening));
  if (isOpening) {
    menu.querySelector(`[data-radio-station-option="${state.radioStation}"]`)?.focus({ preventScroll: true });
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && guidedTourStep >= 0) {
    endGuidedTour();
    return;
  }
  const target = event.target instanceof Element ? event.target : null;
  const option = target?.closest("[data-radio-station-option]");
  const trigger = target?.closest("[data-radio-menu-toggle]");
  if (event.key === "Escape" && (option || trigger)) {
    closeRadioStationMenu(true);
    return;
  }
  if (!option) return;
  const options = [...radioMiniPlayer.querySelectorAll("[data-radio-station-option]")];
  const index = options.indexOf(option);
  let nextIndex = index;
  if (event.key === "ArrowDown") nextIndex = (index + 1) % options.length;
  else if (event.key === "ArrowUp") nextIndex = (index - 1 + options.length) % options.length;
  else if (event.key === "Home") nextIndex = 0;
  else if (event.key === "End") nextIndex = options.length - 1;
  else return;
  event.preventDefault();
  options[nextIndex].focus();
});

document.addEventListener("input", (event) => {
  if (!event.target.matches(".volume-control input, .radio-mini-volume input")) return;
  state.radioVolume = Number(event.target.value);
  radioAudio.volume = state.radioVolume;
  event.target.nextElementSibling.value = `${Math.round(state.radioVolume * 100)}%`;
  const miniSlider = radioMiniPlayer.querySelector(".radio-mini-volume input");
  if (miniSlider !== event.target) {
    miniSlider.value = event.target.value;
    miniSlider.setAttribute("aria-valuetext", `${Math.round(state.radioVolume * 100)} percent`);
    miniSlider.nextElementSibling.value = `${Math.round(state.radioVolume * 100)}%`;
  }
  const mainSlider = screen.querySelector(".volume-control input");
  if (mainSlider && mainSlider !== event.target) {
    mainSlider.value = event.target.value;
    mainSlider.nextElementSibling.value = `${Math.round(state.radioVolume * 100)}%`;
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  if (form.dataset.form === "signin") {
    state.role = "student";
    state.screen = "dashboard";
    render();
    showModal("Welcome to the demo", "You're exploring FitSchool AI in student mode. No account was created and no details were saved.", "", "LET'S GO");
    return;
  }
  if (form.dataset.form === "exercise") {
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const repetitions = Number(formData.get("reps"));
    const difficulty = String(formData.get("difficulty") || "Medium");
    if (!name || !Number.isInteger(repetitions) || repetitions < 1) {
      showModal("Check your exercise details", "Add an exercise name and a whole-number repetition target greater than zero.", "", "EDIT EXERCISE");
      return;
    }
    state.createdExercises.push({ name, description, reps: repetitions, difficulty });
    state.teacherTab = "Exercises";
    render();
    showModal("Exercise published", `${escapeHtml(name)} was added to the teacher's exercise library for the 10 B demo class. This preview doesn't send anything to a real class.`, "", "GREAT");
  }
});

const menuToggle = document.querySelector(".menu-toggle");
menuToggle?.addEventListener("click", () => {
  const nav = document.querySelector(".main-nav");
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
window.addEventListener("hashchange", () => {
  if (window.location.hash === "#app") openApp();
});
render();
