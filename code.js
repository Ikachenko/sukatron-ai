var data = {};
onEvent("SUKATRONAI_predict", "click", function() {
    addPair(data, "Whatareyouinterestedin", getText("Whatareyouinterestedin_dropdown"));
		addPair(data, "Whatisyourendgoal", getText("Whatisyourendgoal_dropdown"));
		addPair(data, "Preffereddevelopmentenvironment", getText("Preffereddevelopmentenvironment_dropdown"));
		addPair(data, "Howdoyouprefertolearn", getText("Howdoyouprefertolearn_dropdown"));
		addPair(data, "DoyouwantObjectOrientedProgrammingfeatures", getText("DoyouwantObjectOrientedProgrammingfeatures_dropdown"));
		addPair(data, "From15howdifficultshouldthelanguageyouwanttolearnbe", getText("From15howdifficultshouldthelanguageyouwanttolearnbe_input"));
    setText("SUKATRONAI_prediction", '');
    getPrediction("SUKATRON AI", "ATYQWFmykBEA", data, function(value) {
      setText("SUKATRONAI_prediction", value);
    });
  });
onEvent("n1", "click", function( ) {
	setScreen("q2");
});
onEvent("n2", "click", function( ) {
  setScreen("q3");
});
onEvent("n3", "click", function( ) {
  setScreen("q4");
});
onEvent("n4", "click", function( ) {
  setScreen("q5");
});
onEvent("n5", "click", function( ) {
  setScreen("q6");
});
onEvent("n6", "click", function( ) {
  setScreen("predict");
});
onEvent("b2", "click", function( ) {
  setScreen("q1");
});
onEvent("b3", "click", function( ) {
  setScreen("q2");
});
onEvent("b4", "click", function( ) {
  setScreen("q3");
});
onEvent("b5", "click", function( ) {
  setScreen("q4");
});
onEvent("b6", "click", function( ) {
  setScreen("q5");
});
onEvent("bp", "click", function( ) {
  setScreen("q6");
});
