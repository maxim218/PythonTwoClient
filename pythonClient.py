import urllib
import urllib2


def getSumma(aaa, bbb):
	url = 'http://localhost:5005/'
	values = {
		'a' : aaa,
		'b' : bbb
	}
	headers = { 'User-Agent' : 'python urllib2' }
	data = urllib.urlencode(values)
	req = urllib2.Request(url, data, headers)
	response = urllib2.urlopen(req)
	result = response.read()
	return result


while True:
	print("  ")
	print("Input A:");
	aaa = input()
	print("Input B:");
	bbb = input()

	answer = getSumma(aaa, bbb)
	print("Summa:")
	print(answer)
	print("_____________________________")







