define([
       "jquery" , "underscore" , "backbone"
       , "collections/snippets" , "collections/my-form-snippets"
       , "views/tab" , "views/my-form"
       , "text!data/input.json", "text!data/radio.json", "text!data/select.json", "text!data/buttons.json"
       , "text!templates/app/render.html",  "text!templates/app/about.html", 
], function(
  $, _, Backbone
  , SnippetsCollection, MyFormSnippetsCollection
  , TabView, MyFormView
  , inputJSON, radioJSON, selectJSON, buttonsJSON
  , renderTab, aboutTab
){
  return {
    initialize: function(){

      //Bootstrap tabs from json.
      new TabView({
        id: "input",
        title: "输入框"
        , collection: new SnippetsCollection(JSON.parse(inputJSON))
      });
      new TabView({
        id: "radiocheckbox",
        title: "单选 / 复选框"
        , collection: new SnippetsCollection(JSON.parse(radioJSON))
      });
      new TabView({
        id: "select",
        title: "列表"
        , collection: new SnippetsCollection(JSON.parse(selectJSON))
      });
      new TabView({
        id: "button",
        title: "按钮"
        , collection: new SnippetsCollection(JSON.parse(buttonsJSON))
      });
      new TabView({
        id: "rendered",
        title: "发布"
        , content: renderTab
      });
      

      //Make the first tab active!
      $("#components .tab-pane").first().addClass("active");
      $("#formtabs li").first().addClass("active");
      // Bootstrap "My Form" with 'Form Name' snippet.
      new MyFormView({
        title: "Original"
        , collection: new MyFormSnippetsCollection([
          { "title" : "Form Name"
            , "fields": {
              "name" : {
                "label"   : "Form Name"
                , "type"  : "input"
                , "value" : "表单名称"
              }
            }
          }
        ])
      });
    }
  }
});
