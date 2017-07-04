echo "Show The Red Face:"

read  value
sleep 1s
if ["$value" == ""]
then
	python new.py
fi

echo "Show the Green Face:"
read value
if ["$value" == ""]
then
	python new.py
fi

sleep 1s

echo "Show the White Face:"
read value
if ["$value" == ""]
then
	python new.py
fi

sleep 1s

echo "Show the Orange Face:"
read value
if ["$value" == ""]
then
	python new.py
fi

sleep 1s

echo "Show the Blue Face:"
read value
if ["$value" == ""]
then
	python new.py
fi

sleep 1s

echo "Show the Yellow Face:"
read value
if ["$value" == ""]
then
	python new.py
fi

sleep 1s

echo "Hit Enter to Solve:"
read value
if ["$value" == ""]
then
	python final2.py
fi

sleep 1s

rm output

sleep 3s
