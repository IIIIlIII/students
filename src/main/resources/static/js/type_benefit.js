$(document).ready(function () {
// //    page signin
//     $("#signin").on("click", function () {
//         var name = $("#nameInput").val();
//         var pass = $("#passInput").val();
//         (name === "" || pass === "") ? empty() : values(name, pass);
//         function values(someName, somePass) {
//             //send values Nahuy
//             console.log("Name is: " + someName, "\nPassword is: " + somePass);
//             $.ajax({
//                 url: "signin.html",
//                 data: {someName: someName, somePass: somePass},
//                 success: function () {
//                     $("#div").append("Name is: " + someName + "\nPassword is: " + somePass);
//                 }
//             });
//         }
//         function empty() {
//             alert("Empty field(s)!");
//             return false;
//         }
//     });
// //    page signin

// //page searching
//     $("#search").on("click", function () {
//         var search = $("#searchInput").val();
//         (search === "") ? empty() : values(search);
//         function values(someSearch) {
//             //send values Nahuy
//             console.log("You are searching for: " + someSearch);
//             $.ajax({
//                 url: "search.html",
//                 data: {someSearch: someSearch},
//                 success: function () {
//                     $("#div").append("Search is: " + someSearch + "\n");
//                 }
//             });
//         }
//         function empty() {
//             alert("Empty field!");
//             return false;
//         }
//     });
// //    page searching

//populate the modal
    $(this).on("click", "#editButton", function () {
        var tr = $(this).closest("tr");
        var id = $(tr).find("td.id").html();
        var benefit_name = $(tr).find("td.benefit_name").html();
        $('#myModal').modal();
        $("#txtId").val(id);
        $("#txtBenefit_name").val(benefit_name);
    });
//populate the modal

//save in modal edit
    $("#myModal").on("click", "#sendEdit", function () {
        $.ajax({
            data: {
                id: $("#txtId").val(),
                ben: $("#txtBenefit_name").val()
            },
            success: function () {
                alert("save edit");
            }
        });
    });
//save in modal edit

//delete button
    $(this).on("click", "#deleteButton", function () {
        var tr = $(this).closest("tr");
        var id = $(tr).find("td.id").html();
        if (confirm("Delete?")) {
            $.ajax({
                // data: {
                //     id: id
                // },
                success: function () {
                    alert("delete");
                }
            });
        }

    });
//delete button

//add button
    $(this).on("click", "#add", function () {
        $('#myModal1').modal();
    });
//add button

//save in modal addtxtEduc_name
    $("#myModal1").on("click", "#sendEdit", function () {
        $.ajax({
            url: "search.html",
            data: {
                id: $("#txtId").val(),
                fio: $("#txtFio").val(),
                spec: $("#txtSpec").val(),
                ben: $("#txtBen").val()
            },
            success: function () {
                alert("save add");
            }
        });
    });
//save in modal add


})