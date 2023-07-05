# Projekt z TSSI

## Jaki jest temat projektu?

Tematem projektu jest fermentacja. Projekt zawiera informacje o procesach fermentacji alkoholowej, octowej oraz mlekowej. 

<br>

## Wymagania projektu?

Niestety z uwagi na taką a nie inną naturę projektu wymagane jest kilka rzeczy, aby go "uruchomić", a raczej zobaczyć jak normalną stronę internetową.

Na początku należy zainstalować środowisko [NodeJS](https://nodejs.org/en), bowiem serwer z takowego korzysta. Wyżej wspomniane środowisko powinno się domyślnie zainstalować z **npm**-em. Po instalacji NodeJS należy włączyć terminal/CMD i użyć komendy `npm install express cors` w celu instalacji wymaganych modułów.

By uruchomić serwer z projektem, w oknie terminala/CMD należy wejść do ścieżki projektu i użyć polecenia `node .server.js`. Po użyciu polecenia można z przeglądarki wejść na `localhost:[port]`, gdzie domyślny port to 3000 

Jeżeli jednak kroki powyżej wydają się zbyt męczące, to zapraszam na adres http://130.61.252.120, gdzie projekt ten powinien być hostowany. Jeżeli zdarzyłoby się, że podane powyżej IP nie działa, to znaczy, że Oracle Cloud zmieniło mi IP serwera. W takiej sytuacji należy się skontaktować z właścicielem projektu. 

## Aktualizacja, 2023-07-05

Niestety, oryginalny adres, http://130.61.252.120, nie służy już do hostowania tego oto projektu. Na pocieszenie, postanowiłem zrobić coś ze swoim życiem i teraz mam drugi serwer oraz własną [domenę](https://sokzkomucha.xyz). Cd. projektu; całkiem niedawno, może miesiąc bądź dwa temu, uświadomiłem sobie, że zamiast tworzyć osobne route do każdego zasobu na serwerze, mogę użyć linijki `app.use(express.static("public"));` by udostępnić wszystko z folderu `public`. Nie będę nic modyfikował, bo pierwsza klasa już się skończyła, ale tylko informuję.
