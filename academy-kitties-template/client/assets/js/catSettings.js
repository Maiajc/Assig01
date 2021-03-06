
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 96,
    "earsColor" : 10,
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
    
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headColor],dna.headColor)
    $('#headcolor').val(dna.headColor)
    mouthAndBelly(colors[dna.mouthColor],dna.mouthColor)
    $('#mouthcolor').val(dna.mouthColor)
    eyeColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyecolor').val(dna.eyesColor)
    earsAndPaw(colors[dna.earsColor],dna.earsColor)
    $('#earcolor').val(dna.earsColor)
    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    $('#decoration').val(dna.decorationPattern)
    midColor(colors[dna.decorationMidcolor], dna.decorationMidcolor)
    $('#decorationmiddle').val(dna.decorationMidcolor)
    sidesColor(colors[dna.decorationSidescolor], dna.decorationSidescolor)
    $('#decorationsides').val(dna.decorationSidescolor)
    animationVariation(dna.animation)
    $('#animationvariation').val(dna.animation)



  
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})
$('#eyescolor').change(()=>{
  var colorVal = $('#eyescolor').val()
  eyesColor(colors[colorVal],colorVal)
})
$('#earscolor').change(()=>{
  var colorVal = $('#earscolor').val()
  earsColor(colors[colorVal],colorVal)
})
$('#mouthcolor').change(()=>{
  var colorVal = $('#mouthcolor').val()
  mouthColor(colors[colorVal],colorVal)
})
$('#decorationcolor').change(()=>{
  var colorVal = $('decorationcolor').val()
  decorationColor(colors[colorVal],colorVal)
})
$('#decorationMidColor1').change( () => {
  var colorVal = $('#decorationMidColor1').val()
  decorationMidColor1(colors[colorVal], colorVal)
})

$('#decorationSides').change( () => {
  var colorVal = $('#decorationSides').val()
  decorationSides(colors[colorVal], colorVal)
})
$('#animation').change( () => {
  var colorVal = parseInt( $('#animation').val())
  animationVariation(animationVal)
})

//Changing cat designs
$('#eyeshape').change( () => {
  var shape = parseInt($('#eyeshape').val())
  eyeVariation(shape)
})

$('#decoration').change( () => {
  var style = parseInt($('#decoration').val())
  decoration(style)
})