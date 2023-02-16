jQuery(function ($) {
  // Frequently Asked Question
  var article = $(".faq>.faqBody>.article");
  article.addClass("hide");
  article.find(".a").hide();
  article.eq(0).removeClass("hide");
  article.eq(0).find(".a").show();
  $(".faq>.faqBody>.article>.q>a").click(function () {
    var myArticle = $(this).parents(".article:first");
    if (myArticle.hasClass("hide")) {
      article.addClass("hide").removeClass("show");
      article.find(".a").slideUp(100);
      myArticle.removeClass("hide").addClass("show");
      myArticle.find(".a").slideDown(100);
    } else {
      myArticle.removeClass("show").addClass("hide");
      myArticle.find(".a").slideUp(100);
    }
    return false;
  });
  $(".faq>.faqHeader>.showAll").click(function () {
    var hidden = $(".faq>.faqBody>.article.hide").length;
    if (hidden > 0) {
      article.removeClass("hide").addClass("show");
      article.find(".a").slideDown(100);
    } else {
      article.removeClass("show").addClass("hide");
      article.find(".a").slideUp(100);
    }
  });
});

var qnaNum = -1;
$(document).ready(function () {
  $(".qa_li .question").click(function () {
    q = $(".qa_li .question").index(this);
    if (q != qnaNum) {
      $(".qa_li .answer").stop(true, true).slideUp(400);
      $(".qa_li").removeClass("open");
      TweenMax.to($(".qa_li .question").eq(qnaNum).find(".iconDiv"), 0.4, {
        rotation: 0,
      });
      qnaNum = q;
      $(".qa_li").eq(qnaNum).addClass("open");
      $(".qa_li .answer").eq(qnaNum).stop(true, true).slideDown(400);
      //TweenMax.to($('.qa_li .question').eq(qnaNum).find('.iconDiv'), 0.4, {rotation:180});
      TweenMax.to($(".qa_li .question").eq(qnaNum).find(".iconDiv"), 0.4, {
        rotation: 0,
      });
    } else {
      $(".qa_li .answer").eq(qnaNum).stop(true, true).slideUp(400);
      $(".qa_li").eq(qnaNum).removeClass("open");
      TweenMax.to($(".qa_li").eq(qnaNum).find(".question p"), 0.4, {
        rotation: 0,
      });
      qnaNum = -1;
    }
  });
});
