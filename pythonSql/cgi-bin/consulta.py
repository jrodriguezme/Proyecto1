#!C:\Users\ITNET\AppData\Local\Microsoft\WindowsApps\python.exe

import json
import sqlite3
conn = sqlite3.connect('imdb.db')
micursor=conn.cursor()

#print("content-type: text/html\n\n" )
print("Content-Type: application/json\n\n")

dic={}


micursor.execute("select * from Actor")
dic["Actor"]=micursor.fetchall()
micursor.execute("select * from Casting")
dic["Casting"]=micursor.fetchall()
micursor.execute("select * from Movie")
dic["Movie"]=micursor.fetchall()
print(json.dumps(dic))
#data="si conecta"
#c = conn.cursor()
#print(conn)

#import re
#import json

#print("content-type: text/html\n\n" )
#print(micursor.execute("tables"))

#def matchLine(line):
 # dic = {}
  #x = re.search("^\[([0-9]+)\] ((.+), )?(.+); ((.+)|(http.+));(.+)\.", line)
  #dic["number"] = x.group(1)
  #dic["author"] = x.group(3)
  #dic["title"] = x.group(4)
  #dic["editor"] = x.group(5)
  #dic["year"] = x.group(8)
  #return dic
 
#f = open("../bibliografia.txt")
#data = []
#for line in f:
 # dic = matchLine(line)
  #data.append(dic)
#print("Content-Type: application/json\n\n")
#print(json.dumps(data)) 