

$(document).ready(() => {
  

  const manageForm = $("form.manage");
  const IDInput = $("input#id-input");

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".admin-username").text(data.username);
  });

  //Code for display button that will display an entry
  $("#display-btn").on("click", event => {
    event.preventDefault();
    const idData = {
      id: IDInput.val().trim(),
    };

    if (!idData.id) {

      return;
    }
    // If we have an ID, we run the displayEntry function and clear the form
    displayEntry(idData.id);
    IDInput.val("");
  });

  //Delete button
  $("#delete-btn").on("click", event => {
    event.preventDefault();
    const idData = {
      id: IDInput.val().trim(),
    };


    if (!idData.id) {
      console.log("return");
      return;
    }
    // If we have an ID, we run the deleteEntry function and clear the form
    deleteEntry(idData.id);
    IDInput.val("");
  });

  //deletes a specified entry from the database
  function deleteEntry(id) {
    fetch(`/api/users/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', },
    }).then(function () {
      alert("Entry has been deleted")
    });
  }

  //displays a specified entry from the database into a modal.
  function displayEntry(id) {
    fetch(`/api/users/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', },
    }).then(function (userData) {

      return userData.json();
    })
      .then(function (userData) {
        $(".modal-body").html(`${userData.race} <br/>  ${userData.sex} <br/> ${userData.age} <br/> ${userData.location}`);

      })
  }
});
