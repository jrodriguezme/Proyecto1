#!C:/Users/ITNET/AppData/Local/Programs/Python/Python38-32/python.exe
# Import modules for CGI handling 
import cgi, cgitb 

# Create instance of FieldStorage 
form = cgi.FieldStorage() 

# Get data from fields
first_name = form.getvalue('first_name')
last_name  = form.getvalue('last_name')

print ("Content-Type: text/html\n\n")
print ("<html><head><title>Hola - Segundo programa CGI</title></head><body>")
print ("<h2>Holaaaaa %s %s</h2>" % (first_name, last_name))
print ("</body></html>")
