from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def myHomeView(request,*args, **kwargs):
	my_context={
		'my_text':"Este es mit exto",
		'my_number':"Este es mi numero",
	}
	print(args,kwargs)
	print(request.user)
	return render(request,"home.html")
def otro(request,*args,**kwargs):
	return render(request,"otro.html",{})
def otraView(request,*args,**kwargs):
	return HttpResponse("<h2>Hola mundo Django desde otra vista</h2>")	