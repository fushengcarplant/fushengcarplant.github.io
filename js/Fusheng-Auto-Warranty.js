"use strict";

const D = document;
const $ = D.querySelector.bind(D);
const $$ = (selector, startNode = D) => [...startNode.querySelectorAll(selector)];
const $All = D.querySelectorAll.bind(D);

function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};

function goTop() {
  const goTop = $('.goTop');
  const scrollFunc = () => {
    let y = window.scrollY;
    if (y > 0) {
      goTop.className = "goTop show";
    } else {
      goTop.className = "goTop hide";
    }
  };
  window.addEventListener("scroll", scrollFunc);
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };
  goTop.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
  };
}

function preLoad() {
  window.onload = function() {
    const preLoad = $('#preload');
    fadeOut(preLoad);
  };
}

document.fonts.load('16px Noto Sans TC').then(function() {
  const body = document.querySelector('body');
  body.style.fontFamily = `"Noto Sans TC", ${window.getComputedStyle(body).getPropertyValue('font-family')}`;
});

document.addEventListener("DOMContentLoaded", function (event) {
  preLoad();
  goTop();

  const
    i             = 0,
    check         = $('#check'),
    textAreaH3    = $('.textArea h3'),
    textAreaP1    = $('.textArea .p1'),
    textAreaP2    = $('.textArea .p2'),
    textInfo1     = $('.textInfo1'),
    textInfo2     = $('.textInfo2'),
    textInfo3     = $('.textInfo3'),
    textInfo4     = $('.textInfo4'),
    textInfo5     = $('.textInfo5'),
    textInfo6     = $('.textInfo6'),
    textInfo7     = $('.textInfo7'),
    mapLink       = $('.mapLink'),
    iibtnComputer = $('.iibtn-computer'),
    iibtnEngine   = $('.iibtn-engine'),
    iibtnSheet    = $('.iibtn-sheet'),
    iibtnTire     = $('.iibtn-tire'),
    computerH4    = $('.computer--xs h4'),
    computerP     = $('.computer--xs p'),
    engineH4      = $('.engine--xs h4'),
    engineP       = $('.engine--xs p'),
    sheetH4       = $('.sheet--xs h4'),
    sheetP        = $('.sheet--xs p'),
    tireH4        = $('.tire--xs h4'),
    tireP         = $('.tire--xs p'),
    subsP         = $('.subsP'),
    subcP         = $('.subcP'),
    subeP         = $('.subeP'),
    subtP         = $('.subtP');

  const
    picIndex     = $('.pic--index'),
    picSheet     = $('.pic--sheet'),
    picComputer  = $('.pic--computer'),
    picEngine    = $('.pic--engine'),
    picTire      = $('.pic--tire'),
    ibtnComputer = $('.iibtn-computer'),
    ibtnEngine   = $('.iibtn-engine'),
    ibtnSheet    = $('.iibtn-sheet'),
    ibtnTire     = $('.iibtn-tire'),
    subWrap      = $('.subWrap'),
    close        = $('.close');

  const sub = {
    "tw": {
      "computerP" : "提供精準檢測數據，讓專業技師能更準確對您的愛車提供相關保修資訊。",
      "engineP" : "離合器、變速器...車輪、避震器...轉向軸、轉向橫拉杆...剎車盤、剎車片...，對行車安全非常重要。",
      "sheetP" : "技師的工藝水準影響著品質，專業精確的施工過程，為您的愛車呈現煥然一新。",
      "tireP" : "不正確的車輪或輪胎定位會導致愛車的輪胎磨損不均或提早磨損，輪胎平衡對於輪胎維護是有其必要性。"
    },
    "en": {
      "computerP" : "Provide accurate testing data, so that professional technicians can provide more accurate warranty information for your car.",
      "engineP" : "Clutches, transmissions... wheels, shock absorbers... steering shafts, tie rods... brake discs, brake pads... are very important for driving safety.",
      "sheetP" : "Technician's process level affects quality, professional and accurate construction process, showing a new look for your car.",
      "tireP" : "Incorrect wheel or tire positioning will cause uneven or early wear of your car's tires, and tire balance is necessary for tire maintenance."
    }
  };

  /**
   *! init
   */
  picIndex.style.display    = 'block';
  picSheet.style.display    = 'none';
  picComputer.style.display = 'none';
  picEngine.style.display   = 'none';
  picTire.style.display     = 'none';
  subWrap.style.display     = 'none';

  ibtnComputer.addEventListener('click', () => {
    picIndex.style.display    = 'none';
    picComputer.style.display = 'block';
    subWrap.style.display     = 'block';
    subsP.style.display       = 'none';
    subcP.style.display       = 'block';
    subeP.style.display       = 'none';
    subtP.style.display       = 'none';
    subcP.textContent         = sub.tw.computerP;
    if(picComputer.style.display = 'block' && check.checked) {
      subcP.textContent = sub.en.computerP;
    } else {
      subcP.textContent = sub.tw.computerP;
    }
  });
  ibtnEngine.addEventListener('click', e => {
    picIndex.style.display  = 'none';
    picEngine.style.display = 'block';
    subWrap.style.display   = 'block';
    subsP.style.display     = 'none';
    subcP.style.display     = 'none';
    subeP.style.display     = 'block';
    subtP.style.display     = 'none';
    subeP.textContent       = sub.tw.engineP;
    if(picEngine.style.display = 'block' && check.checked) {
      subeP.textContent = sub.en.engineP;
    } else {
      subeP.textContent = sub.tw.engineP;
    }
  });
  ibtnSheet.addEventListener('click', e => {
    picIndex.style.display = 'none';
    picSheet.style.display = 'block';
    subWrap.style.display  = 'block';
    subsP.style.display    = 'block';
    subcP.style.display    = 'none';
    subeP.style.display    = 'none';
    subtP.style.display    = 'none';
    subsP.textContent      = sub.tw.sheetP;
    if(picSheet.style.display = 'block' && check.checked) {
      subsP.textContent = sub.en.sheetP;
    } else {
      subsP.textContent = sub.tw.sheetP;
    }
  });
  ibtnTire.addEventListener('click', e => {
    picIndex.style.display = 'none';
    picTire.style.display  = 'block';
    subWrap.style.display  = 'block';
    subsP.style.display    = 'none';
    subcP.style.display    = 'none';
    subeP.style.display    = 'none';
    subtP.style.display    = 'block';
    subtP.textContent      = sub.tw.tireP;
    if(picTire.style.display = 'block' && check.checked) {
      subtP.textContent = sub.en.tireP;
    } else {
      subtP.textContent = sub.tw.tireP;
    }
  });
  close.addEventListener('click', e => {
    picIndex.style.display    = 'block';
    picSheet.style.display    = 'none';
    picComputer.style.display = 'none';
    picEngine.style.display   = 'none';
    picTire.style.display     = 'none';
    subWrap.style.display     = 'none';
  });

  fetch('../fusheng.json')
    .then(response => response.json())
    .then(data => {
      textAreaH3.textContent = data.lang[i].textAreaH3;
      check.addEventListener('click', () =>{
        if(check.checked) {
          textAreaH3.textContent    = data.lang[1].textAreaH3;
          textAreaP1.textContent    = data.lang[1].textAreaP1;
          textAreaP2.textContent    = data.lang[1].textAreaP2;
          textInfo1.textContent     = data.lang[1].textInfo1;
          textInfo2.textContent     = data.lang[1].textInfo2;
          textInfo3.textContent     = data.lang[1].textInfo3;
          textInfo4.textContent     = data.lang[1].textInfo4;
          textInfo5.textContent     = data.lang[1].textInfo5;
          textInfo6.textContent     = data.lang[1].textInfo6;
          textInfo7.textContent     = data.lang[1].textInfo7;
          mapLink.textContent       = data.lang[1].mapLink;
          iibtnComputer.textContent = data.lang[1].iibtnComputer;
          computerH4.textContent    = data.lang[1].iibtnComputer;
          computerP.textContent     = data.lang[1].computerP;
          iibtnEngine.textContent   = data.lang[1].iibtnEngine;
          engineH4.textContent      = data.lang[1].iibtnEngine;
          engineP.textContent       = data.lang[1].engineP;
          iibtnSheet.textContent    = data.lang[1].iibtnSheet;
          sheetH4.textContent       = data.lang[1].iibtnSheet;
          sheetP.textContent        = data.lang[1].sheetP;
          iibtnTire.textContent     = data.lang[1].iibtnTire;
          tireH4.textContent        = data.lang[1].iibtnTire;
          tireP.textContent         = data.lang[1].tireP;
          subsP.textContent         = data.lang[1].sheetP;
          subcP.textContent         = data.lang[1].computerP;
          subeP.textContent         = data.lang[1].engineP;
          subtP.textContent         = data.lang[1].tireP;
        } else {
          textAreaH3.textContent    = data.lang[0].textAreaH3;
          textAreaP1.textContent    = data.lang[0].textAreaP1;
          textAreaP2.textContent    = data.lang[0].textAreaP2;
          textInfo1.textContent     = data.lang[0].textInfo1;
          textInfo2.textContent     = data.lang[0].textInfo2;
          textInfo3.textContent     = data.lang[0].textInfo3;
          textInfo4.textContent     = data.lang[0].textInfo4;
          textInfo5.textContent     = data.lang[0].textInfo5;
          textInfo6.textContent     = data.lang[0].textInfo6;
          textInfo7.textContent     = data.lang[0].textInfo7;
          mapLink.textContent       = data.lang[0].mapLink;
          iibtnComputer.textContent = data.lang[0].iibtnComputer;
          computerH4.textContent    = data.lang[0].iibtnComputer;
          computerP.textContent     = data.lang[0].computerP;
          iibtnEngine.textContent   = data.lang[0].iibtnEngine;
          engineH4.textContent      = data.lang[0].iibtnEngine;
          engineP.textContent       = data.lang[0].engineP;
          iibtnSheet.textContent    = data.lang[0].iibtnSheet;
          sheetH4.textContent       = data.lang[0].iibtnSheet;
          sheetP.textContent        = data.lang[0].sheetP;
          iibtnTire.textContent     = data.lang[0].iibtnTire;
          tireH4.textContent        = data.lang[0].iibtnTire;
          tireP.textContent         = data.lang[0].tireP;
          subsP.textContent         = data.lang[0].sheetP;
          subcP.textContent         = data.lang[0].computerP;
          subeP.textContent         = data.lang[0].engineP;
          subtP.textContent         = data.lang[0].tireP;
        }
      });
    });
});
