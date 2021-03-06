// onload hide all
var dlContainer = $('#dlContainer');
var annotateContainer = $('#annotateContainer');

dlContainer.hide();
annotateContainer.hide();

// hovered over download button
$('#downloadBtn').on('mouseenter', function () {
    dlContainer.slideDown(300);
}).on('mouseleave', function (e) {
    // mouse left button
    // check if mouse hovered over download container
    let goingTo = e.relatedTarget || e.fromElement;
    if (!dlContainer.has(goingTo).length) {
        // not container // hide
        dlContainer.slideUp(300);
    }
});

// left download container
dlContainer.on('mouseleave', function (e) {
    // mouse left container
    // check if mouse hovered download button
    let goingTo = e.relatedTarget || e.fromElement;
    if (!$(goingTo).is('#downloadBtn')) {
        // not button // hide
        $(this).slideUp(300);
    }
});


$('#annotateBtn').on('mouseenter', function () {
    annotateContainer.slideDown(300);
}).on('mouseleave', function (e) {
    // mouse left button
    // check if mouse hovered over download container
    let goingTo = e.relatedTarget || e.fromElement;
    if (!annotateContainer.has(goingTo).length) {
        // not container // hide
        annotateContainer.slideUp(300);
    }
});

// left download container
annotateContainer.on('mouseleave', function (e) {
    // mouse left container
    // check if mouse hovered download button
    let goingTo = e.relatedTarget || e.fromElement;
    if (!$(goingTo).is('#annotateBtn')) {
        // not button // hide
        $(this).slideUp(300);
    }
});