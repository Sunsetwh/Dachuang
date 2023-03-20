import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

httpd = socketserver.TCPServer(("", PORT), Handler)

print("Serving at http://localhost:{}".format(PORT))
httpd.serve_forever()
