var data = {
    "date": "",
    "activity": "",
    "mood": "",
    "symptom": ""
}

// var obj = JSON.parse(data);

$(".activity-btn").click(function() {
    $(this).toggleClass('pressed')
    $(this).blur()
    var content = $(this).html()
    var inputData = data.activity

    // Don't know how to delete elements from JSON object
    if (!inputData.includes(content) && $(this).hasClass('pressed')) {
        var allElements = $(".activity-btn.pressed").map(function() {
            return this.innerHTML;
        }).get();
        data.activity = allElements
        console.log(data.activity)
    }
    // console.log(content)
    // data.activity = content
    // console.log(data)
})

$(".mood-btn").click(function() {
    $(this).toggleClass('pressed')
    $(this).blur()
    var content = $(this).html()
    var inputData = data.mood

    if (!inputData.includes(content) && $(this).hasClass('pressed')) {
        var allElements = $(".mood-btn.pressed").map(function() {
            return this.innerHTML;
        }).get();
        data.mood = allElements
        console.log(data.mood)
    }
    // console.log(content)
    // data.mood = content
    // console.log(data)
})

$(".symptom-btn").click(function() {
    $(this).toggleClass('pressed')
    $(this).blur()
    var content = $(this).html()
    var inputData = data.symptom

    if (!inputData.includes(content) && $(this).hasClass('pressed')) {
        var allElements = $(".symptom-btn.pressed").map(function() {
            return this.innerHTML;
        }).get();
        data.symptom = allElements
        console.log(data.symptom)
    }
    // console.log(content)
    // data.symptom = content
    // console.log(data)
})

$('.next-btn').click(function() {
    var date = new Date();
    var dateStr = date.toDateString();
    data.date = dateStr
    console.log(data)
})