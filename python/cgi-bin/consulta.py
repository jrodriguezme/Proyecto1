#!C:/Users/ITNET/AppData/Local/Programs/Python/Python38-32/python.exe

import re
import json

#print("content-type: text/html\n\n" )
#print("<br><B>hello python soy jose rodriguez</B>")
 
def matchLine(line):
  dic = {}
  x = re.search("^\[([0-9]+)\] ((.+), )?(.+); ((.+)|(http.+));(.+)\.", line)
  dic["number"] = x.group(1)
  dic["author"] = x.group(3)
  dic["title"] = x.group(4)
  dic["editor"] = x.group(5)
  dic["year"] = x.group(8)
  return dic
 
f = open("../bibliografia.txt")
data = []
for line in f:
  dic = matchLine(line)
  data.append(dic)
print("Content-Type: application/json\n\n")
print(json.dumps(data)) 