server {
  # react 静态页面
  listen 80 default_server;
  listen [::]:80 default_server ipv6only=on;

  # Make site accessible from http://localhost/
  # server_name localhost;

  location / {
    root  /workspace/app/build;
    index index.html index.htm;

    gzip on;
    gzip_vary on;                                        # Enables inserting the “Vary: Accept-Encoding” response header field.
    gzip_proxied expired no-cache no-store private no_last_modified no_etag auth; # Enables gzipping of responses for proxied requests depending on the request and response.
    gzip_comp_level 2;                                   # Sets a gzip compression level of a response.
    gzip_min_length 1000;
    gzip_disable "MSIE [1-6]\.";
    gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    # 对于 BrowserRouter 需要启用该配置
    # try_files $uri /index.html;
  }
}
