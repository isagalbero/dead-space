
function doFetch(){

  fetch("https://content.googleapis.com/youtube/v3/search?maxResults=4&part=snippet&q=deadspaceaftermath&key=AIzaSyCU8zaA2ixhvBND7-6uKS28YfOb-QnrSAc", {method: 'GET'})
  .then(response => response.json())
  .then(data => insertVideo(data))
  .catch((error) => {
    alert("erro");
  });
}


  
  function insertVideo(data){
    $('main').html("")
    for (item of data.items) {
      $('main').append(`
        <iframe width="350" height="230" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `);
      // $('#video').append(iframe);
    }
  }

  // Botão para editar texto Isaac
  btnEdit = document.querySelector("#edit");
  btnEdit.addEventListener("click", editIsaac);

  function editIsaac(){
    if (btnEdit.value === "change"){
      ["issac-text"].map((enterClass) => {
        enter = document.getElementsByClassName(enterClass)[0];
        enter.setAttribute("contenteditable", "true");
        enter.setAttribute("style", "border:3px solid turquoise");
        return enter;
      })
      btnEdit.value = "save";
      btnEdit.textContent = "Save";

    } else if (btnEdit.value === "save"){
      ["issac-text"].map((enterClass) =>{
        enter = document.getElementsByClassName(enterClass)[0];
        enter.removeAttribute("contenteditable");
        enter.removeAttribute("style");
        return enter;
      })
      btnEdit.value = "change";
      btnEdit.textContent = "Edit";
    }
    return false;
  }

  // Botão para editar texto Plot
  btnEdit2 = document.querySelector("#edit2");
  btnEdit2.addEventListener("click", editPlot);

  function editPlot(){
    if (btnEdit2.value === "change"){
      ["plot-text"].map((enterClass) => {
        enter = document.getElementsByClassName(enterClass)[0];
        enter.setAttribute("contenteditable", "true");
        enter.setAttribute("style", "border:3px solid turquoise");
        return enter;
      })
      btnEdit2.value = "save";
      btnEdit2.textContent = "Save";

    } else if (btnEdit2.value === "save"){
      ["plot-text"].map((enterClass) =>{
        enter = document.getElementsByClassName(enterClass)[0];
        enter.removeAttribute("contenteditable");
        enter.removeAttribute("style");
        return enter;
      })
      btnEdit2.value = "change";
      btnEdit2.textContent = "Edit";
    }
    return false;
  }


  