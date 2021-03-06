//exchangeList

(function(Core) {

  Core.register('keywordList', function(sandbox) {
  
    return {
  
      init: function() {
        this.$exchangeList = sandbox.x('$')('#keywordList');
        this.listen();
      },

      listen: function() {
        sandbox.listen('newAmount', this.newAmount, this);
      },

      newAmount: function(data) {
        var newAmountHtml = this.getHtml(data);
        this.$exchangeList.prepend(newAmountHtml);
      },

      getHtml: function(data) {
        var li = sandbox.x('$')('<li class="currencyExchangeItem">');
        li.append(data.amount + '<br/>');
        return li;
      }

    };

  });

} (Core));