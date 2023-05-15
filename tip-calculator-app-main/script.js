const tip = {
  bill: 0,
  tip: 0,
  people: 0,
  isCalculable: function () {
    return this.bill !== 0 && this.tip !== 0 && this.people !== 0;
  },
  calculate: function () {
    if (this.isCalculable()) {
      tipAmount = (this.bill * (this.tip / 100)) / this.people;
      total = (this.bill + this.bill * (this.tip / 100)) / this.people;
      return [tipAmount.toFixed(2), total.toFixed(2)];
    } else {
      return [0, 0];
    }
  },
};

const features = {
  checkInput: function (number) {
    if (number < 0) return "Can't be negative";
    if (number == 0) return "Can't be zero";
    return "";
  },

  setBill: function (bill) {
    const error = this.checkInput(bill);
    if (error !== "") {
      $(".bill.error").html(error);
      $("#bill").addClass("error");
    } else {
      $(".bill.error").html("");
      $("#bill").removeClass("error");
      tip.bill = parseFloat(bill);
    }
  },

  setNumberOfPeople: function (number) {
    const error = this.checkInput(number);
    if (error !== "") {
      $(".people.error").html(error);
      $("#people").addClass("error");
    } else {
      $(".people.error").html("");
      $("#people").removeClass("error");
      tip.people = parseInt(number);
    }
  },

  showResult: function () {
    [tipAmount, total] = tip.calculate();
    if (tipAmount !== 0 && total !== 0) {
      $("#tipAmount").html(`$${tipAmount}`);
      $("#total").html(`$${total}`);
      $("#reset").removeAttr("disabled");
    }
  },

  reset: function () {
    $("#bill, #customTip, #people").prop("value", "");
    $("#tipAmount, #total").html("$0.00");
    $("#tips button#selected").removeAttr("id");
    $("#reset").attr("disabled", true);
    tip.bill = 0;
    tip.tip = 0;
    tip.people = 0;
  },
};

$(() => {
  $("#customTip").on("change", function (e) {
    const tipInput = $(this).prop("value");
    const error = features.checkInput(tipInput);
    if (error !== "") {
      $(this).addClass("error");
    } else {
      $("button#selected").removeAttr("id");
      tip.tip = parseInt(tipInput);
    }
  });

  $("#bill").on("change", function () {
    features.setBill($(this).prop("value"));
  });

  $("#people").on("change", function () {
    features.setNumberOfPeople($(this).prop("value"));
  });

  $("#bill, #customTip, #people").on("change", function () {
    features.showResult();
  });

  $("#tips button").on("click", function () {
    $("#customTip").prop("value", "");
    $("button#selected").removeAttr("id");
    $(this).attr("id", "selected");
    tip.tip = parseInt($(this).attr("value"));

    features.showResult();
  });

  $("#reset").on("click", () => features.reset());
});
