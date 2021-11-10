const times = [];
function timer() {
  let topp = [
    ["W", "W", "W"],
    ["W", "W", "W"],
    ["W", "W", "W"],
  ];
  let front = [
    ["G", "G", "G"],
    ["G", "G", "G"],
    ["G", "G", "G"],
  ];
  let bottom = [
    ["Y", "Y", "Y"],
    ["Y", "Y", "Y"],
    ["Y", "Y", "Y"],
  ];
  let left = [
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ];
  let right = [
    ["R", "R", "R"],
    ["R", "R", "R"],
    ["R", "R", "R"],
  ];
  let back = [
    ["B", "B", "B"],
    ["B", "B", "B"],
    ["B", "B", "B"],
  ];
  let top_ids = ["w00", "w01", "w02", "w10", "w11", "w12", "w20", "w21", "w22"];
  let front_ids = [
    "f00",
    "f01",
    "f02",
    "f10",
    "f11",
    "f12",
    "f20",
    "f21",
    "f22",
  ];
  let right_ids = [
    "r00",
    "r01",
    "r02",
    "r10",
    "r11",
    "r12",
    "r20",
    "r21",
    "r22",
  ];
  let left_ids = [
    "l00",
    "l01",
    "l02",
    "l10",
    "l11",
    "l12",
    "l20",
    "l21",
    "l22",
  ];
  let bottom_ids = [
    "bt00",
    "bt01",
    "bt02",
    "bt10",
    "bt11",
    "bt12",
    "bt20",
    "bt21",
    "bt22",
  ];
  let back_ids = [
    "b00",
    "b01",
    "b02",
    "b10",
    "b11",
    "b12",
    "b20",
    "b21",
    "b22",
  ];

  // cycle function is used for the sides that retain the pieces but the pieces are just rotated CW or CWC
  // example- when we do a R move, the stickers on the right face (Blue center side) are just rotated CW
  function cycle(side) {
    let ttopp = [];
    let tfront = [];
    let tbottom = [];
    let tleft = [];
    let tright = [];
    let tback = [];

    for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
    for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
    for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
    for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
    for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
    for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();
    if (side === "right") {
      tright[0][0] = right[2][0];
      tright[0][1] = right[1][0];
      tright[0][2] = right[0][0];
      tright[1][0] = right[2][1];
      tright[1][1] = right[1][1];
      tright[1][2] = right[0][1];
      tright[2][0] = right[2][2];
      tright[2][1] = right[1][2];
      tright[2][2] = right[0][2];
      for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
      for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
      for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
      for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
      for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
      for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
      return;
    }
    if (side === "left") {
      tleft[0][0] = left[2][0];
      tleft[0][1] = left[1][0];
      tleft[0][2] = left[0][0];
      tleft[1][0] = left[2][1];
      tleft[1][1] = left[1][1];
      tleft[1][2] = left[0][1];
      tleft[2][0] = left[2][2];
      tleft[2][1] = left[1][2];
      tleft[2][2] = left[0][2];
      for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
      for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
      for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
      for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
      for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
      for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
      return;
    }
    if (side === "up") {
      ttopp[0][0] = topp[2][0];
      ttopp[0][1] = topp[1][0];
      ttopp[0][2] = topp[0][0];
      ttopp[1][0] = topp[2][1];
      ttopp[1][1] = topp[1][1];
      ttopp[1][2] = topp[0][1];
      ttopp[2][0] = topp[2][2];
      ttopp[2][1] = topp[1][2];
      ttopp[2][2] = topp[0][2];
      for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
      for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
      for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
      for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
      for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
      for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
      return;
    }
    if (side === "front") {
      tfront[0][0] = front[2][0];
      tfront[0][1] = front[1][0];
      tfront[0][2] = front[0][0];
      tfront[1][0] = front[2][1];
      tfront[1][1] = front[1][1];
      tfront[1][2] = front[0][1];
      tfront[2][0] = front[2][2];
      tfront[2][1] = front[1][2];
      tfront[2][2] = front[0][2];
      for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
      for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
      for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
      for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
      for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
      for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
      return;
    }
    if (side === "back") {
      tback[0][0] = back[2][0];
      tback[0][1] = back[1][0];
      tback[0][2] = back[0][0];
      tback[1][0] = back[2][1];
      tback[1][1] = back[1][1];
      tback[1][2] = back[0][1];
      tback[2][0] = back[2][2];
      tback[2][1] = back[1][2];
      tback[2][2] = back[0][2];
      for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
      for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
      for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
      for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
      for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
      for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
      return;
    }
    if (side === "down") {
      tbottom[0][0] = bottom[2][0];
      tbottom[0][1] = bottom[1][0];
      tbottom[0][2] = bottom[0][0];
      tbottom[1][0] = bottom[2][1];
      tbottom[1][1] = bottom[1][1];
      tbottom[1][2] = bottom[0][1];
      tbottom[2][0] = bottom[2][2];
      tbottom[2][1] = bottom[1][2];
      tbottom[2][2] = bottom[0][2];
      for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
      for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
      for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
      for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
      for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
      for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
      return;
    }
  }

  function r() {
    let ttopp = [];
    let tfront = [];
    let tbottom = [];
    let tleft = [];
    let tright = [];
    let tback = [];

    for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
    for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
    for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
    for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
    for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
    for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();

    ttopp[0][2] = front[0][2];
    ttopp[1][2] = front[1][2];
    ttopp[2][2] = front[2][2];
    tfront[0][2] = bottom[0][2];
    tfront[1][2] = bottom[1][2];
    tfront[2][2] = bottom[2][2];
    tbottom[0][2] = back[2][0];
    tbottom[1][2] = back[1][0];
    tbottom[2][2] = back[0][0];
    tback[0][0] = topp[2][2];
    tback[1][0] = topp[1][2];
    tback[2][0] = topp[0][2];
    for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
    for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
    for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
    for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
    for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
    for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
    cycle("right");
    return;
  }

  function l() {
    let ttopp = [];
    let tfront = [];
    let tbottom = [];
    let tleft = [];
    let tright = [];
    let tback = [];

    for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
    for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
    for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
    for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
    for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
    for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();

    ttopp[0][0] = back[2][2];
    ttopp[1][0] = back[1][2];
    ttopp[2][0] = back[0][2];
    tfront[0][0] = topp[0][0];
    tfront[1][0] = topp[1][0];
    tfront[2][0] = topp[2][0];
    tbottom[0][0] = front[0][0];
    tbottom[1][0] = front[1][0];
    tbottom[2][0] = front[2][0];
    tback[0][2] = bottom[2][0];
    tback[1][2] = bottom[1][0];
    tback[2][2] = bottom[0][0];
    for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
    for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
    for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
    for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
    for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
    for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
    cycle("left");
    return;
  }
  function u() {
    let ttopp = [];
    let tfront = [];
    let tbottom = [];
    let tleft = [];
    let tright = [];
    let tback = [];

    for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
    for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
    for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
    for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
    for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
    for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();

    tfront[0][0] = right[0][0];
    tfront[0][1] = right[0][1];
    tfront[0][2] = right[0][2];
    tleft[0][0] = front[0][0];
    tleft[0][1] = front[0][1];
    tleft[0][2] = front[0][2];
    tright[0][0] = back[0][0];
    tright[0][1] = back[0][1];
    tright[0][2] = back[0][2];
    tback[0][0] = left[0][0];
    tback[0][1] = left[0][1];
    tback[0][2] = left[0][2];

    for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
    for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
    for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
    for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
    for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
    for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
    cycle("up");
    return;
  }

  function f() {
    let ttopp = [];
    let tfront = [];
    let tbottom = [];
    let tleft = [];
    let tright = [];
    let tback = [];

    for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
    for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
    for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
    for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
    for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
    for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();

    ttopp[2][0] = left[2][2];
    ttopp[2][1] = left[1][2];
    ttopp[2][2] = left[0][2];

    tright[0][0] = topp[2][0];
    tright[1][0] = topp[2][1];
    tright[2][0] = topp[2][2];

    tbottom[0][0] = right[2][0];
    tbottom[0][1] = right[1][0];
    tbottom[0][2] = right[0][0];

    tleft[0][2] = bottom[0][0];
    tleft[1][2] = bottom[0][1];
    tleft[2][2] = bottom[0][2];

    for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
    for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
    for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
    for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
    for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
    for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
    cycle("front");
    return;
  }
  function b() {
    let ttopp = [];
    let tfront = [];
    let tbottom = [];
    let tleft = [];
    let tright = [];
    let tback = [];

    for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
    for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
    for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
    for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
    for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
    for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();

    ttopp[0][0] = right[0][2];
    ttopp[0][1] = right[1][2];
    ttopp[0][2] = right[2][2];

    tright[0][2] = bottom[2][2];
    tright[1][2] = bottom[2][1];
    tright[2][2] = bottom[2][0];

    tbottom[2][0] = left[0][0];
    tbottom[2][1] = left[1][0];
    tbottom[2][2] = left[2][0];

    tleft[0][0] = topp[0][2];
    tleft[1][0] = topp[0][1];
    tleft[2][0] = topp[0][0];

    for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
    for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
    for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
    for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
    for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
    for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
    cycle("back");
    return;
  }
  function d() {
    let ttopp = [];
    let tfront = [];
    let tbottom = [];
    let tleft = [];
    let tright = [];
    let tback = [];

    for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
    for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
    for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
    for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
    for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
    for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();

    tright[2][0] = front[2][0];
    tright[2][1] = front[2][1];
    tright[2][2] = front[2][2];

    tfront[2][0] = left[2][0];
    tfront[2][1] = left[2][1];
    tfront[2][2] = left[2][2];

    tleft[2][0] = back[2][0];
    tleft[2][1] = back[2][1];
    tleft[2][2] = back[2][2];

    tback[2][0] = right[2][0];
    tback[2][1] = right[2][1];
    tback[2][2] = right[2][2];

    for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
    for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
    for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
    for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
    for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
    for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
    cycle("down");
    return;
  }

  function final_update() {
    let k = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (topp[i][j] === "W") {
          document.getElementById(top_ids[k]).style.backgroundColor = "white";
          k++;
          continue;
        }
        if (topp[i][j] === "G") {
          document.getElementById(top_ids[k]).style.backgroundColor = "green";
          k++;
          continue;
        }
        if (topp[i][j] === "Y") {
          document.getElementById(top_ids[k]).style.backgroundColor = "yellow";
          k++;
          continue;
        }
        if (topp[i][j] === "B") {
          document.getElementById(top_ids[k]).style.backgroundColor = "blue";
          k++;
          continue;
        }
        if (topp[i][j] === "R") {
          document.getElementById(top_ids[k]).style.backgroundColor = "red";
          k++;
          continue;
        }
        if (topp[i][j] === "O") {
          document.getElementById(top_ids[k]).style.backgroundColor = "orange";
          k++;
          continue;
        }
      }
    }
    k = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (front[i][j] === "W") {
          document.getElementById(front_ids[k]).style.backgroundColor = "white";
          k++;
          continue;
        }
        if (front[i][j] === "G") {
          document.getElementById(front_ids[k]).style.backgroundColor = "green";
          k++;
          continue;
        }
        if (front[i][j] === "Y") {
          document.getElementById(front_ids[k]).style.backgroundColor =
            "yellow";
          k++;
          continue;
        }
        if (front[i][j] === "B") {
          document.getElementById(front_ids[k]).style.backgroundColor = "blue";
          k++;
          continue;
        }
        if (front[i][j] === "R") {
          document.getElementById(front_ids[k]).style.backgroundColor = "red";
          k++;
          continue;
        }
        if (front[i][j] === "O") {
          document.getElementById(front_ids[k]).style.backgroundColor =
            "orange";
          k++;
          continue;
        }
      }
    }
    k = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (right[i][j] === "W") {
          document.getElementById(right_ids[k]).style.backgroundColor = "white";
          k++;
          continue;
        }
        if (right[i][j] === "G") {
          document.getElementById(right_ids[k]).style.backgroundColor = "green";
          k++;
          continue;
        }
        if (right[i][j] === "Y") {
          document.getElementById(right_ids[k]).style.backgroundColor =
            "yellow";
          k++;
          continue;
        }
        if (right[i][j] === "B") {
          document.getElementById(right_ids[k]).style.backgroundColor = "blue";
          k++;
          continue;
        }
        if (right[i][j] === "R") {
          document.getElementById(right_ids[k]).style.backgroundColor = "red";
          k++;
          continue;
        }
        if (right[i][j] === "O") {
          document.getElementById(right_ids[k]).style.backgroundColor =
            "orange";
          k++;
          continue;
        }
      }
    }
    k = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (left[i][j] === "W") {
          document.getElementById(left_ids[k]).style.backgroundColor = "white";
          k++;
          continue;
        }
        if (left[i][j] === "G") {
          document.getElementById(left_ids[k]).style.backgroundColor = "green";
          k++;
          continue;
        }
        if (left[i][j] === "Y") {
          document.getElementById(left_ids[k]).style.backgroundColor = "yellow";
          k++;
          continue;
        }
        if (left[i][j] === "B") {
          document.getElementById(left_ids[k]).style.backgroundColor = "blue";
          k++;
          continue;
        }
        if (left[i][j] === "R") {
          document.getElementById(left_ids[k]).style.backgroundColor = "red";
          k++;
          continue;
        }
        if (left[i][j] === "O") {
          document.getElementById(left_ids[k]).style.backgroundColor = "orange";
          k++;
          continue;
        }
      }
    }
    k = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (bottom[i][j] === "W") {
          document.getElementById(bottom_ids[k]).style.backgroundColor =
            "white";
          k++;
          continue;
        }
        if (bottom[i][j] === "G") {
          document.getElementById(bottom_ids[k]).style.backgroundColor =
            "green";
          k++;
          continue;
        }
        if (bottom[i][j] === "Y") {
          document.getElementById(bottom_ids[k]).style.backgroundColor =
            "yellow";
          k++;
          continue;
        }
        if (bottom[i][j] === "B") {
          document.getElementById(bottom_ids[k]).style.backgroundColor = "blue";
          k++;
          continue;
        }
        if (bottom[i][j] === "R") {
          document.getElementById(bottom_ids[k]).style.backgroundColor = "red";
          k++;
          continue;
        }
        if (bottom[i][j] === "O") {
          document.getElementById(bottom_ids[k]).style.backgroundColor =
            "orange";
          k++;
          continue;
        }
      }
    }
    k = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (back[i][j] === "W") {
          document.getElementById(back_ids[k]).style.backgroundColor = "white";
          k++;
          continue;
        }
        if (back[i][j] === "G") {
          document.getElementById(back_ids[k]).style.backgroundColor = "green";
          k++;
          continue;
        }
        if (back[i][j] === "Y") {
          document.getElementById(back_ids[k]).style.backgroundColor = "yellow";
          k++;
          continue;
        }
        if (back[i][j] === "B") {
          document.getElementById(back_ids[k]).style.backgroundColor = "blue";
          k++;
          continue;
        }
        if (back[i][j] === "R") {
          document.getElementById(back_ids[k]).style.backgroundColor = "red";
          k++;
          continue;
        }
        if (back[i][j] === "O") {
          document.getElementById(back_ids[k]).style.backgroundColor = "orange";
          k++;
          continue;
        }
      }
    }
    return;
  }

  let notations = [];
  let scarmble = [];
  notations.push("R");
  notations.push("R'");
  notations.push("L");
  notations.push("L'");
  notations.push("U");
  notations.push("U'");
  notations.push("F");
  notations.push("F'");
  notations.push("D");
  notations.push("D'");
  notations.push("B");
  notations.push("B'");
  notations.push("R2");
  notations.push("L2");
  notations.push("U2");
  notations.push("F2");
  notations.push("D2");
  notations.push("B2");

  for (let i = 0; i < 23; i++) {
    let temp = Math.floor(Math.random() * 18);
    if (i == 0) {
      scarmble.push(notations[temp]);
      continue;
    }
    if (scarmble[i - 1][0] != notations[temp][0]) {
      if (i == 1) {
        scarmble.push(notations[temp]);

        continue;
      }

      if (
        (scarmble[i - 2][0] == "R" || scarmble[i - 2][0] == "L") &&
        (scarmble[i - 1][0] == "R" || scarmble[i - 1][0] == "L") &&
        (notations[temp][0] == "R" || notations[temp][0] == "L")
      ) {
        i--;
        continue;
      }

      if (
        (scarmble[i - 2][0] == "U" || scarmble[i - 2][0] == "D") &&
        (scarmble[i - 1][0] == "U" || scarmble[i - 1][0] == "D") &&
        (notations[temp][0] == "U" || notations[temp][0] == "D")
      ) {
        i--;
        continue;
      }

      if (
        (scarmble[i - 2][0] == "F" || scarmble[i - 2][0] == "B") &&
        (scarmble[i - 1][0] == "F" || scarmble[i - 1][0] == "B") &&
        (notations[temp][0] == "F" || notations[temp][0] == "B")
      ) {
        i--;
        continue;
      } else scarmble.push(notations[temp]);
    } else i--; // to ensure that no element of the array is unfiled
  }

  for (let i = 0; i < scarmble.length; i++) {
    if (scarmble[i].length === 1) {
      if (scarmble[i][0] == "B") {
        b();
        continue;
      }
      if (scarmble[i][0] == "R") {
        r();
        continue;
      }
      if (scarmble[i][0] == "L") {
        l();
        continue;
      }
      if (scarmble[i][0] == "F") {
        f();
        continue;
      }
      if (scarmble[i][0] == "U") {
        u();
        continue;
      }
      if (scarmble[i][0] == "D") {
        d();
        continue;
      }
    } else {
      if (scarmble[i][1] == "2") {
        if (scarmble[i][0] == "B") {
          b();
          b();
          continue;
        }
        if (scarmble[i][0] == "R") {
          r();
          r();
          continue;
        }
        if (scarmble[i][0] == "L") {
          l();
          l();
          continue;
        }
        if (scarmble[i][0] == "F") {
          f();
          f();
          continue;
        }
        if (scarmble[i][0] == "U") {
          u();
          u();
          continue;
        }
        if (scarmble[i][0] == "D") {
          d();
          d();
          continue;
        }
      } else {
        if (scarmble[i][0] == "B") {
          b();
          b();
          b();
          continue;
        }
        if (scarmble[i][0] == "R") {
          r();
          r();
          r();
          continue;
        }
        if (scarmble[i][0] == "L") {
          l();
          l();
          l();
          continue;
        }
        if (scarmble[i][0] == "F") {
          f();
          f();
          f();
          continue;
        }
        if (scarmble[i][0] == "U") {
          u();
          u();
          u();
          continue;
        }
        if (scarmble[i][0] == "D") {
          d();
          d();
          d();
          continue;
        }
      }
    }
  }

  let s = "";
  s = scarmble.join(" ");

  final_update();
  document.getElementById("scramble").innerHTML = s;
  console.log(scarmble);
  let time = document.getElementById("time").value;
  times.push(time);
  document.getElementById("stats").innerHTML = times;
  let avg = [
    times[times.length - 5],
    times[times.length - 1],
    times[times.length - 2],
    times[times.length - 3],
    times[times.length - 4],
  ];
  avg.sort;
  let av = (Number(avg[1]) + Number(avg[2]) + Number(avg[3])) / 3;
  console.log(avg);
  if (avg.length >= 3) document.getElementById("avg").innerHTML = av;
}
