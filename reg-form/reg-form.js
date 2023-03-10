function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let menu = ["Contacts info", "Step 1", "Step 2", "Finishing"];

let loremIpsum = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec quam blandit, tempus erat sit amet, pretium turpis. Cras eu nulla tincidunt, mollis metus eu, pretium odio. Morbi placerat justo nisi, non porttitor magna gravida vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ultricies rutrum lorem, vitae porttitor diam pulvinar at. Donec interdum at nisi eget facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
  `Vestibulum feugiat quis neque quis accumsan. Proin lobortis elementum mauris. Praesent interdum eget diam interdum imperdiet. Phasellus molestie sed felis et sagittis. Suspendisse fringilla id ipsum quis molestie. Ut eros tortor, mollis quis nulla sed, venenatis consectetur velit. Morbi nec malesuada lacus. Donec viverra, nulla nec pulvinar sollicitudin, velit eros posuere purus, ac gravida tortor arcu tincidunt mi.`,
  `Nullam malesuada libero vitae erat vestibulum, et maximus mauris varius. Vivamus est nisl, dictum at arcu ut, dictum dignissim dolor. Nunc tincidunt varius posuere. Proin et nunc sed justo mollis mollis quis nec ipsum. Suspendisse convallis eros mauris, finibus faucibus velit porta ultrices. Praesent lobortis, purus in elementum gravida, velit velit efficitur magna, sit amet finibus ex sem volutpat turpis. Sed sit amet malesuada eros. Suspendisse suscipit ipsum et ultrices consequat. Vivamus imperdiet nibh lorem, ac dictum erat dignissim eget.`,
  `Nam gravida nibh nec nibh mollis, a auctor felis dictum. Praesent id dui ornare, facilisis dui id, aliquam velit. Proin congue nec risus ut porttitor. Suspendisse id nisl in enim consequat vehicula et ut tortor. Mauris scelerisque at ipsum quis vestibulum. Donec vel diam ac odio luctus rutrum at ac ligula. Aliquam varius nunc a quam interdum, vel aliquam augue euismod. Duis at nunc quis eros malesuada imperdiet vel quis turpis. Nam tincidunt mauris lacus, vitae viverra est tincidunt in. Duis vel semper lorem. Ut nec massa at lacus vestibulum vestibulum.`,
  `Nulla a lorem luctus, malesuada augue sed, imperdiet elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nec elementum mi. Donec eu metus sagittis, pulvinar libero eget, dignissim justo. Fusce eget dolor nisl. Aenean faucibus, lacus non volutpat convallis, magna est pellentesque diam, ut dignissim arcu magna in massa. Duis mollis non mauris vitae pulvinar. Ut efficitur fringilla mauris, id vehicula purus malesuada sed.`,
  `Quisque fringilla eleifend pretium. In tempus viverra velit vitae ornare. Mauris consectetur ipsum eu velit pretium, interdum ullamcorper mauris hendrerit. Aliquam congue venenatis dolor, nec sodales magna iaculis in. Donec eu ligula auctor, pellentesque massa id, laoreet turpis. Ut consectetur, lacus a rutrum dapibus, ipsum nisi accumsan dolor, in sagittis elit magna quis diam. Sed rutrum, enim at lacinia ultricies, justo tellus accumsan dolor, non mattis elit sapien eget odio. Nunc varius non libero id bibendum. Quisque aliquam sit amet orci mattis condimentum. Ut risus dolor, posuere bibendum laoreet eget, auctor ut felis. `,
  `Morbi est tortor, blandit et diam hendrerit, venenatis tincidunt nunc. Aliquam vitae condimentum quam. Donec fermentum lorem vitae fermentum accumsan. In posuere augue et arcu dignissim, ac porta libero feugiat. Vestibulum viverra posuere nisi in suscipit. Vestibulum scelerisque sem pellentesque risus maximus tempor. Aliquam sagittis venenatis euismod. Morbi nec dolor eu nunc fermentum aliquam. Proin at turpis non sem maximus consectetur eu non felis. Maecenas id ullamcorper magna, eget sollicitudin magna. Fusce porttitor commodo volutpat. Donec a scelerisque orci. Maecenas vel ligula eget ligula faucibus congue et sed ligula.`,
  `Sed lacinia, enim ut pretium imperdiet, turpis est pharetra enim, quis euismod urna enim faucibus quam. Nunc et dignissim justo, sit amet pulvinar justo. Aliquam viverra quam nec elementum ornare. Proin vel urna at nunc posuere ultricies sed mollis orci. Curabitur vel fermentum metus. Quisque facilisis bibendum dui non mollis. Praesent libero felis, convallis quis scelerisque eu, ornare vitae ipsum. Duis ipsum lorem, tempor eget enim quis, luctus mollis quam. Nulla lobortis risus lectus, ut pulvinar dolor laoreet in. Nam nunc enim, rutrum ac fringilla eget, fermentum vel dolor.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam dolor vitae convallis maximus. Pellentesque semper orci ut aliquet dapibus. Morbi aliquet nec dui pulvinar sodales. Vivamus arcu lectus, posuere ut ultrices ut, efficitur vitae enim. Aenean tempus fermentum lectus, quis faucibus ante feugiat tincidunt. Nam vehicula at massa vel auctor. Aliquam erat volutpat. Curabitur vitae suscipit ipsum. Duis vitae tortor elit. Nam at massa sit amet nisi pharetra ullamcorper. Nulla sagittis risus sit amet dui dignissim sagittis. Quisque eu sem quis ipsum rutrum fermentum vel quis dui.`,
  `Morbi mattis dignissim auctor. In sit amet eros non libero venenatis porttitor vel ac tellus. Mauris congue scelerisque convallis. Donec tristique nisi purus, sed sollicitudin massa posuere sit amet. Proin vel accumsan augue. Nullam libero mauris, consequat a pulvinar eget, eleifend eu libero. Aliquam erat volutpat. Nulla non ante magna. Nam ullamcorper congue pretium. Donec rhoncus, sapien in rhoncus varius, nibh leo mattis urna, id porttitor lacus ante in elit. Ut faucibus mi sed ornare luctus. Fusce pulvinar massa eget mauris bibendum, vitae consequat erat luctus. Nunc ac turpis quis eros malesuada placerat pretium sit amet diam.`,
];

let currentStep;

window.onload = function () {
  currentStep = 1;
  setForm();
};

function drawStepHeader(i) {
  let stepHeader = document.createElement("a");
  stepHeader.className = "step__header";
  stepHeader.href = "#";
  stepHeader.innerText = menu[i];
  stepHeader.id = `block-${i + 1}`;

  return stepHeader;
}

function drawStepPointAndLines(i) {
  let stepPoint = document.createElement("div");
  stepPoint.className = "step__point";

  stepPoint.appendChild(getPreLine(i));
  stepPoint.appendChild(getPoint(i));
  stepPoint.appendChild(getPostLine(i));

  return stepPoint;
}

function getPreLine(i) {
  let preLine = document.createElement("div");
  if ( i === 0 ) {
    preLine.className = "pre-line disabled";
  } else if (i === 1) {
    preLine.className = "pre-line line-active";
  } else {
    preLine.className = "pre-line";
  }

  preLine.id = `block-${i + 1}`;

  return preLine;
}

function getPoint(i) {
  let point = document.createElement("a");
  point.className = i === currentStep - 1 ? "point point-active" : "point";
  point.href = "#";
  point.id = `block-${i + 1}`;

  return point;
}

function getPostLine(i) {
  let postLine = document.createElement("div");

  if ( i === menu.length - 1 ) {
    postLine.className = "post-line disabled";
  } else if ( i === 0 ) {
    postLine.className = "post-line line-active";
  } else {
    postLine.className = "post-line";
  }

  postLine.id = `block-${i + 1}`;

  return postLine;
}

function drawContentItem(i) {
  let contentItem = getContentItem(i);

  contentItem.appendChild(getContentTitle(i));
  contentItem.appendChild(getContentText(i));

  return contentItem;
}

function getContentItem(i) {
  let contentItem = document.createElement("div");
  contentItem.className =
    i === currentStep - 1
      ? "content-item content-item__active"
      : "content-item content-item__disabled";
  contentItem.id = `block-${i + 1}`;

  return contentItem;
}

function getContentTitle(i) {
  let contentTitle = document.createElement("p");
  contentTitle.className = "content-item__title";
  contentTitle.innerText = menu[i];

  return contentTitle;
}

function getContentText(i) {
  let contentText = document.createElement("p");
  let articleNumber = randomIntFromInterval(1, loremIpsum.length) - 1;

  contentText.className = "content-item__text";
  contentText.innerText = loremIpsum[articleNumber];

  return contentText;
}

function setForm() {
  menu.forEach((item, index) => {
    let step = document.createElement("div");
    step.className = "step";
    step.appendChild(drawStepHeader(index));
    step.appendChild(drawStepPointAndLines(index));

    document.getElementById("steps").appendChild(step);

    document
      .getElementById("content_items")
      .appendChild(drawContentItem(index));
  });
}

window.addEventListener("click", (e) => {

  if (e.target.id.includes("block")) {

    currentStep = +e.target.id.at(-1);
    console.log(currentStep);

    for (let i = 0; i < menu.length; i++) {
      if (i + 1 < currentStep) {
        paintPreviousStep(i+1);
      } else if (i === currentStep - 1) {
        paintCurrentStep(i+1);
      } else {
        paintFutureStep(i+1);
      }
    }
  }

});

function paintPreviousStep(i) {
  blocks = document.querySelectorAll(`[id=block-${i}]`);

  blocks.forEach((item, index) => {

    if (item.className.includes('pre-line') && !item.className.includes('disabled')) {
      item.className = "pre-line line-active";
    } else if (item.className.includes('point')) {
      item.className = "point point-done"
    } else if (item.className.includes('post-line') && !item.className.includes('disabled')) {
      item.className = "post-line line-active";
    } else if (item.className.includes("content-item")) {
      item.className = "content-item content-item__disabled";
    }

  })
}

function paintCurrentStep(i) {
  blocks = document.querySelectorAll(`[id=block-${i}]`);

  blocks.forEach((item, index) => {

    if (item.className.includes('pre-line') && !item.className.includes('disabled')) {
      item.className = "pre-line line-active";
    } else if (item.className.includes('point')) {
      item.className = "point point-active"
    } else if (item.className.includes('post-line') && !item.className.includes('disabled')) {
      item.className = "post-line line-active";
    } else if (item.className.includes("content-item")) {
      item.className = "content-item content-item__active";
    }

  })
}

function paintFutureStep(i) {
  blocks = document.querySelectorAll(`[id=block-${i}]`);

  blocks.forEach((item, index) => {
    if (item.className.includes('pre-line') && !item.className.includes('disabled')) {

      if ( i === currentStep+1) {
        item.className = "pre-line line-active";
      } else {
        item.className = "pre-line";
      }

    } else if (item.className.includes('point')) {
      item.className = "point"
    } else if (item.className.includes('post-line') && !item.className.includes('disabled')) {
      item.className = "post-line";
    } else if (item.className.includes("content-item")) {
      item.className = "content-item content-item__disabled";
    }

  })
}