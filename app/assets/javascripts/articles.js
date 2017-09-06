window.onload = function() {
  var vm = new Vue({
    el: '#article-form',
    data: {
      show: false,
      loading: false,
      message: '送信中です',
      title: '',
      body: ''
    },
    beforeMount: function() {
      var that = this,
          hostname = window.location.hostname,
          protocol = window.location.protocol,
          port = window.location.port,
          baseURL = [protocol, '//', hostname, ':', port, '/articles.json'].join('');

      var params = {
        url: baseURL,
        method: 'GET'
      };

      $.ajax(params).done(function(response) {
        console.log(response);
      });
    },
    methods: {
      create: function() {
        this.loading = !this.loading;
        var that = this,
        hostname = window.location.hostname,
        protocol = window.location.protocol,
        port = window.location.port,
        baseURL = [protocol, '//', hostname, ';', port, '/articles'].join('');

        var params = {
          url: baseURL,
          method: 'POST',
          data: {
            title: that.title,
            body: that.body
          }
        };

        $.ajax(params).done(function(response) {
          that.message = '送信完了しました';
          that.show = false;
          that.title = '';
          that.body = '';
        });
      }
    }
  });
};