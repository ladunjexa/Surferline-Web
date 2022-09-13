var listIdxActions = ["Left", "Right", "Down", "Up"];

function showMenuList(listName, listIdx) {
  $(`#${listName}_container`).css("display", "inherit");
  $(`#${listName}_container`).addClass(
    `animated slideIn${listIdxActions[listIdx]}`
  );
  setTimeout(function () {
    $(`#${listName}_container`).removeClass(
      `animated slideIn${listIdxActions[listIdx]}`
    );
  }, 800);
}

function closeMenuList(listName, listIdx) {
  $(`#${listName}_container`).addClass(
    `animated slideOut${listIdxActions[listIdx]}`
  );
  setTimeout(function () {
    $(`#${listName}_container`).removeClass(
      `animated slideOut${listIdxActions[listIdx]}`
    );
    $(`#${listName}_container`).css("display", "none");
  }, 800);
}

setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
    $("#caseholder").css("display", "none");
    $("#about").removeClass("animated fadeIn");
    $("#contact").removeClass("animated fadeIn");
    $("#courses").removeClass("animated fadeIn");
    $("#team").removeClass("animated fadeIn");
  }, 1000);
}, 1500);
