fetch(
  "http://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true"
)
  .then((response) => response.text())
  .then((data) => {
    var elements = JSON.parse(data);
    var rootDiv = document.getElementById("container");

    //Data Filtering
    document.getElementById("category").onchange = (e) => {
      var allElements = document.getElementsByTagName("div");
      //Hide All Elements
      for (i = 0; i < allElements.length; ++i) {
        allElements[i].style.display = "none";
      }
      //Show Selected Category Elements
      var filter = document.querySelectorAll(`.${e.target.value}`);
      for (i = 0; i < filter.length; ++i) {
        filter[i].style.display = "";
      }
      console.log(filter);
    };

    //Data Showing
    elements.map((ele) => {
      var div = document.createElement("div");
      var p1 = document.createElement("p");
      var p2 = document.createElement("p");
      p1.style.color = "green";
      p2.style.color = "blue";
      var hr = document.createElement("hr");
      div.setAttribute("class", ele.category);
      div.classList.add("elements");
      p1.innerText = ele.fname + " " + ele.lname;
      p2.innerText = ele.category;
      div.appendChild(p1);
      div.appendChild(p2);
      rootDiv.appendChild(div);
      div.appendChild(hr);
    });
  });
