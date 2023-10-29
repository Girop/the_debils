from flask import jsonify
import sqlite3
import json
from to_json_defs import to_json_amendment, to_json_project

conn = sqlite3.connect(r"backend/database/database.db")
cursor = conn.cursor()

chodnik = """"""


""
""

cursor.execute(
    "INSERT INTO amendments VALUES (1, 'Adam Jablon', '2020-01-21', 1, 100, 1, 2, 'Jestem bardzo wdzięczny za planowany chodnik, ale mam pewną propozycję. Czy moglibyśmy również uwzględnić oznakowanie przejść dla pieszych na pobliskich skrzyżowaniach? Poprawiłoby to bezpieczeństwo i ułatwiło dostęp do chodnika.')"
)
cursor.execute(
    "INSERT INTO amendments VALUES (1, 'Weronika', '2020-01-12', 2, 100, 0, 1, 'Bardzo cieszę się z budowy chodnika, ale mam pomysł, aby na jednym jego końcu umieścić ławkę i kosz na śmieci. Byłoby to świetne miejsce na odpoczynek dla przechodniów i zachęciło ludzi do dbania o porządek na chodniku.')"
)
cursor.execute(
    "INSERT INTO amendments VALUES (1, 'Adam Jablon', '2020-01-22', 1, 150, 30, 2, 'Proszę o rozważenie rozmieszczenia oświetlenia na chodniku, zwłaszcza w okolicach, gdzie jest mniej ruchu. Poprawi to bezpieczeństwo pieszych w godzinach wieczornych. Chodnik z dobrą widocznością byłby znacznie bardziej przyjazny dla naszych mieszkańców.')"
)


conn.commit()
conn.close()


# cursor.execute("DROP TABLE IF EXISTS project")
# cursor.execute("DROP TABLE IF EXISTS amendments")
# cursor.execute("DROP TABLE IF EXISTS announcements")
# cursor.execute("DROP TABLE IF EXISTS project_tags")
# cursor.execute(
#     "CREATE TABLE IF NOT EXISTS project (project_id INTERGER PRIMARY KEY, project_type TEXT, title TEXT, content TEXT, post_date TEXT, vote_date TEXT, approves INTEGER, disapproves INTEGER, author TEXT, FOREIGN KEY (project_type) REFERENCES Project_type(name))"
# )
# cursor.execute(
#     "CREATE TABLE IF NOT EXISTS amendments (project_id ID, author TEXT, date TEXT, position INTEGER, lenght INTEGER, approves INTEGER, disapproves INTEGER, content TEXT, FOREIGN KEY (project_id) REFERENCES project(project_id))"
# )
# cursor.execute(
#     "CREATE TABLE IF NOT EXISTS announcements (announcement_id INTEGER PRIMARY KEY, title TEXT, content TEXT, date TEXT, author TEXT)"
# )
# cursor.execute(
#     "CREATE TABLE IF NOT EXISTS project_tags (name, project_id, FOREIGN KEY (project_id) REFERENCES project(project_id))"
# )

# cursor.execute(
#     "INSERT INTO project VALUES (1, 'Official', 'Nowy chodnik', ' Gmina [nazwa gminy] pragnie ogłosić projekt budowy nowego chodnika, który ma na celu poprawę infrastruktury miejskiej oraz zwiększenie bezpieczeństwa pieszych. Planowana inwestycja zakłada budowę chodnika o długości [długość] metrów, biegnącego wzdłuż ulicy [nazwa ulicy] od [punkt początkowy] do [punkt końcowy]. Projekt uwzględnia stworzenie nowej nawierzchni chodnika z materiałów trwałych i łatwych w utrzymaniu. Chodnik zostanie wyposażony w oznakowanie poziome oraz odpowiednie oświetlenie, co zwiększy bezpieczeństwo pieszych, zwłaszcza po zmierzchu. Planowana budowa chodnika jest ważnym elementem naszych działań mających na celu poprawę infrastruktury oraz dostępności dla mieszkańców, w tym osób starszych i niepełnosprawnych. Projekt ten przyczyni się do stworzenia bardziej przyjaznego i dostępnego środowiska miejskiego. Szczegółowy harmonogram projektu oraz kosztorys zostaną dostarczone w ostatecznej wersji dokumentu, a w trakcie realizacji projektu będą przestrzegane wszelkie obowiązujące przepisy i regulacje.', '2024-01-11', '2024-07-11', 50, 34, 'Jan Kowalski')"
# )
#
# cursor.execute(
#     "INSERT INTO project VALUES (2, 'Proposition', 'Projekt artystyczny w przestrzeni publicznej', 'Projekt artystyczny w przestrzeni publicznej to inicjatywa, która ma na celu ożywienie i upiększenie naszej gminy poprzez sztukę uliczną i instalacje artystyczne. Nasza społeczność ma wizję, aby nasze ulice, place i parki stawały się nie tylko funkcjonalnymi miejscami, ale także przestrzenią dla kreatywności i wyrazu artystycznego. Projekt zakłada organizację konkursu artystycznego, w którym zarówno lokalni artyści, jak i młodzi twórcy, mogą zgłaszać swoje pomysły na prace artystyczne. Wybrane projekty zostaną następnie wdrożone w przestrzeni publicznej. Mogą to być mural na ścianie budynku, rzeźby czy interaktywne instalacje, które przyciągną uwagę mieszkańców i odwiedzających. Ten projekt ma na celu nie tylko estetyczne urozmaicenie naszego miasta, ale także promocję lokalnych artystów i kultury. Prace artystyczne staną się częścią tożsamości naszej gminy, przyciągając turystów i budując więzi międzyludzkie. Jako gmina jesteśmy podekscytowani tą inicjatywą i jesteśmy otwarci na propozycje i wkład naszych mieszkańców. Pragniemy stworzyć przestrzeń, która jest nie tylko funkcjonalna, ale także inspirująca i pełna wyjątkowego piękna artystycznego. ', '2014-10-24', '2014-11-24', 5000, 134, 'Kan Jowalski')"
# )
# cursor.execute(
#     "INSERT INTO project VALUES (3, 'Official', 'Rozbudowa parku', 'Gmina [nazwa gminy] z przyjemnością ogłasza projekt rozbudowy parku, w ramach którego planowana jest budowa nowego chodnika. Nasz cel to stworzenie jeszcze bardziej atrakcyjnego miejsca rekreacji dla mieszkańców i odwiedzających. Nowy chodnik, o długości [długość] metrów, zostanie zaprojektowany tak, aby połączyć różne części parku, umożliwiając wygodne i bezpieczne przechadzki oraz dostęp do najważniejszych atrakcji parku, takich jak plac zabaw, oczko wodne i tereny rekreacyjne. Projekt zakłada wykorzystanie materiałów przyjaznych dla środowiska oraz estetyczne oświetlenie, które umożliwi korzystanie z parku również po zmierzchu. To inwestycja, która nie tylko ułatwi dostęp do parku, ale także zachęci mieszkańców do aktywnego spędzania czasu na świeżym powietrzu. Szczegółowy harmonogram projektu oraz kosztorys zostaną dostarczone w ostatecznej wersji dokumentu, a w trakcie realizacji projektu będą przestrzegane wszelkie obowiązujące przepisy i regulacje.', '2020-01-11', '2020-05-11', 50, 34, 'Jan Kowalski')"
# )
# cursor.execute(
#     "INSERT INTO project VALUES (4, 'Proposition', 'Program edukacyjny dla seniorów', 'Program edukacyjny dla seniorów to inicjatywa, która jest ukierunkowana na wzbogacenie życia naszych starszych mieszkańców poprzez edukację, rozwijanie zainteresowań i integrację społeczną. Nasza gmina rozumie znaczenie aktywności seniorów w życiu społecznym i ich potrzebę ciągłego rozwoju, dlatego pragniemy stworzyć program dostosowany do ich potrzeb. W ramach programu, planujemy organizować różnorodne zajęcia, takie jak warsztaty artystyczne, nauka języków obcych, wykłady, zajęcia ruchowe oraz spotkania tematyczne. Seniorzy będą mieli okazję pogłębiać swoją wiedzę, rozwijać swoje zdolności i czerpać radość z nauki. Ponadto, program stworzy możliwość nawiązywania nowych przyjaźni i budowania relacji społecznych. Chcemy, aby nasi seniorzy czuli się docenieni i aktywni w życiu społecznym, niezależnie od swojego wieku. Nasz program edukacyjny jest otwarty na propozycje i sugestie seniorów, a także na współpracę z lokalnymi ekspertami i organizacjami, które mogą wzbogacić ofertę edukacyjną. Jesteśmy przekonani, że ten program przyczyni się do polepszenia jakości życia naszych seniorów, zachęcając ich do aktywnego uczestnictwa w życiu społecznym i nieustannego rozwoju. To inwestycja w naszą starszą społeczność, która ma na celu promowanie aktywności i zdrowia psychicznego naszych seniorów. ', '2014-10-24', '2014-11-24', 5000, 134, 'Kan Jowalski')"
# )
# cursor.execute(
#     "INSERT INTO project VALUES (5, 'Official', 'Projekt Edukacyjny Dla Młodzieży', 'Gmina [nazwa gminy] z ogromnym zapałem i troską o przyszłość młodych mieszkańców ogłasza Projekt Edukacyjny Dla Młodzieży. Naszym priorytetem jest rozwijanie potencjału i umiejętności młodego pokolenia. Projekt ten ma na celu dostarczenie wsparcia edukacyjnego, kulturalnego i zawodowego dla młodzieży w wieku od [zakres wiekowy]. Planujemy organizować różnorodne warsztaty, kursy i spotkania, które pomogą uczestnikom rozwijać swoje zdolności oraz zdobywać nowe umiejętności. Tematyka będzie obejmować naukę języków obcych, sztukę, przedsiębiorczość i wiele innych dziedzin. Nasza gmina ma na celu stworzenie przestrzeni, w której młodzież może rozwijać się, nawiązywać kontakty i zdobywać doświadczenie potrzebne do osiągnięcia sukcesu w życiu. Chcemy inspirować i kształcić przyszłych liderów. Szczegółowe informacje dotyczące harmonogramu projektu i dostępnych zasobów zostaną udostępnione w ostatecznej wersji dokumentu. Projekt będzie prowadzony zgodnie z obowiązującymi przepisami i regulacjami. ', '2022-01-11', '2022-05-11', 50, 34, 'Jan Kowalski')"
# )
#
# cursor.execute(
#     "INSERT INTO project VALUES (6, 'Official', 'Lokalny plac zabaw dla dzieci', 'Lokalny plac zabaw dla dzieci to projekt, który wynika z troski o młodszych mieszkańców naszej gminy. Naszym celem jest stworzenie miejsca, gdzie dzieci mogą bezpiecznie bawić się na świeżym powietrzu, rozwijać swoje umiejętności i spędzać czas w towarzystwie rówieśników. Projekt zakłada budowę placu zabaw, który będzie dostosowany do potrzeb dzieci w różnym wieku. Pragniemy uwzględnić różnorodne elementy, takie jak huśtawki, zjeżdżalnie, piaskownice, place do gry w piłkę oraz wiele innych atrakcji, które pobudzą wyobraźnię i aktywność dzieci. Plac zabaw zostanie zaprojektowany z myślą o bezpieczeństwie i wygodzie użytkowników. Chcemy, aby nasz lokalny plac zabaw stał się miejscem, gdzie rodziny mogą spędzać czas razem, a dzieci rozwijają swoje zdolności fizyczne i społeczne. Będzie to również doskonała okazja do integracji społeczności i budowania relacji międzyludzkich. Jako gmina jesteśmy zobowiązani do stworzenia miejsc, które sprzyjają rozwojowi dzieci i zapewniają im radosne dzieciństwo. Ten projekt to nasza odpowiedź na potrzeby naszych najmłodszych mieszkańców i inwestycja w ich przyszłość. ', '2022-01-11', '2022-05-11', 50, 34, 'Jan Kowalski')"
# )


# cursor.execute(
#     "INSERT INTO announcements VALUES (1, 'Planowany festiwal kulturalny', 'Z przyjemnością przedstawiam planowany festiwal kulturalny, który odbędzie się w naszej gminie. To wyjątkowe wydarzenie ma na celu promowanie różnorodności kulturowej oraz zapewnienie niezapomnianej rozrywki dla mieszkańców i odwiedzających. Podczas festiwalu będziemy mieli okazję odkryć bogactwo artystyczne, muzykę, tańce i tradycje z różnych części świata. W programie znajdą się występy artystów, warsztaty rzemieślnicze, pyszna kuchnia z różnych kuchni świata oraz wiele innych atrakcji. To idealna okazja do wspólnego świętowania różnorodności kulturowej i budowania więzi społecznych. Dołączcie do nas na tym fascynującym festiwalu!', '2024-10-11', 'Ban Bowalski')"
# )
# cursor.execute(
#     "INSERT INTO announcements VALUES (2, 'Ekologiczny dzień sprzątania', 'Zapraszamy wszystkich miłośników przyrody i ekologii na nasz Ekologiczny Dzień Sprzątania! To wyjątkowe wydarzenie, które ma na celu ochronę naszego środowiska naturalnego. Razem z lokalnymi społecznościami, chcemy podjąć działania mające na celu oczyszczenie naszych parków, lasów i plaż z niepotrzebnych odpadków. Przygotowaliśmy worki, rękawice i narzędzia, aby uczestnicy mogli wspólnie z nami pracować nad czystszym otoczeniem. To także doskonała okazja, aby nauczyć się więcej o ekologii i sposobach dbania o naszą planetę. Dołączcie do nas, by razem działać na rzecz czystszej i zdrowszej przyszłości!', '2024-09-01', 'Jowalska Jowalska')"
# )
# cursor.execute(
#     "INSERT INTO announcements VALUES (3, 'Lokalny targ', 'Zapraszamy na nasz uroczy Lokalny Targ, który jest prawdziwą ucztą dla miłośników lokalnych smaków i wyrobów rzemieślniczych. Na targu znajdziesz szeroki wybór świeżych, lokalnych produktów żywnościowych, od owoców i warzyw po miody i sery, wszystko w jednym miejscu. Oprócz pyszności kulinarnej, możesz także odkryć unikatowe rękodzieła, biżuterię, wyroby ceramiczne i wiele innych dzieł sztuki stworzonych przez lokalnych twórców. Targ to także doskonałe miejsce do spotkań z sąsiadami i integracji z lokalną społecznością. Dołącz do nas, aby wsparować lokalnych producentów i odkryć wyjątkowe skarby naszej gminy na tym uroczym targu.', '2024-06-11', 'Ban Bowalski')"
# )
# cursor.execute(
#     "INSERT INTO announcements VALUES (4, 'Maraton charytatywny', 'Zapraszamy do udziału w naszym Maratonie Charytatywnym - wydarzeniu, które łączy pasję do biegania z pomocą potrzebującym! To okazja do wspólnego bicia rekordów osobistych i jednoczesnego wsparcia lokalnych inicjatyw charytatywnych. Biegacze, zarówno początkujący, jak i doświadczeni, spotkają się na trasie, aby pokonać wyzwania i podzielić się radością z aktywności fizycznej. Cały dochód z wydarzenia zostanie przekazany na cele charytatywne, wspierając lokalne organizacje i osoby potrzebujące. Niezależnie od Twojego poziomu sprawności, dołącz do nas w trosce o innych i ucz się razem z nami, że sport może zmieniać świat!', '2023-10-24', 'Jowalska Jowalska')"
# )
# cursor.execute(
#     "INSERT INTO announcements VALUES (5, 'Dzień zdrowia i wellness', 'Z przyjemnością zapraszamy na nasz Dzień Zdrowia i Wellness, który jest poświęcony twojemu dobremu samopoczuciu i zdrowiu! To pełen inspiracji dzień, wypełniony działaniami mającymi na celu promowanie zdrowego stylu życia i dbania o siebie. Na naszym wydarzeniu znajdziesz szereg atrakcji, takich jak bezpłatne konsultacje medyczne, zajęcia fitness, warsztaty z zakresu zdrowego gotowania i dietetyki, a także relaksacyjne sesje jogi i medytacji. To doskonała okazja, aby dowiedzieć się więcej o swoim zdrowiu, zacząć aktywność fizyczną i odnaleźć spokój wśród codziennego zgiełku. Wspólnie tworzymy przestrzeń, gdzie troska o zdrowie staje się priorytetem. Dołącz do nas i zainwestuj w swój stan zdrowia i samopoczucia!', '2020-05-11', 'Ban Bowalski')"
# )
# cursor.execute(
#     "INSERT INTO announcements VALUES (6, 'Piknik rodzinny', 'Zapraszamy wszystkie rodziny na nasz uroczy Piknik Rodzinny, który ma na celu stworzenie niezapomnianych chwil spędzonych razem na świeżym powietrzu. To idealna okazja, aby wziąć udział w licznych zabawach i grach rodzinnych, które zapewnią rozrywkę zarówno dzieciom, jak i dorosłym. Przygotowaliśmy strefę gastronomiczną, gdzie będzie można skosztować pysznego jedzenia, w tym grillowanych przysmaków i domowych wypieków. Dodatkowo, na scenie odbędą się występy artystyczne, konkursy i zabawy, które umilą całą rodzinę. Nasz piknik to również okazja do zawarcia nowych znajomości i nawiązania przyjaznych relacji z innymi rodzinami. Dołączcie do nas i spędźcie razem czas pełen uśmiechów i radości!', '2014-10-24', 'Jowalska Jowalska')"
# )
# cursor.execute(
#     "INSERT INTO announcements VALUES (7, 'Konkurs fotograficzny', 'Zapraszamy wszystkich pasjonatów fotografii na nasz Konkurs Fotograficzny, gdzie możecie podzielić się swoją twórczością i kreatywnością. To wyjątkowa okazja, aby wyrazić swoje spojrzenie na świat i uwiecznić niezwykłe chwile. Nasz konkurs otwiera drzwi dla zarówno początkujących, jak i doświadczonych fotografów. Tematyka jest różnorodna, pozwalając na eksplorację różnych stylów i technik. Prace będą oceniane przez kompetentne jury, a zwycięzcy otrzymają nagrody oraz szansę na wystawienie swoich fotografii publicznie. To nie tylko konkurs, ale także okazja do dzielenia się pasją z innymi miłośnikami fotografii, nawiązywania kontaktów i inspiracji. Dołączcie do nas, aby wyrazić swoją wyjątkowość przez obiektyw aparatu i odkryć piękno w każdym kadrze!', '2014-10-24', 'Jowalska Jowalska')"
# )



# cursor.execute("INSERT INTO project_tags VALUES ('Komunikacja', 1)")
# cursor.execute("INSERT INTO project_tags VALUES ('Beton', 1)")
# cursor.execute("INSERT INTO project_tags VALUES ('Inwestycja', 1)")
# cursor.execute("INSERT INTO project_tags VALUES ('Zieleń', 2)")
# cursor.execute("INSERT INTO project_tags VALUES ('Ekologia', 2)")
# cursor.execute("INSERT INTO project_tags VALUES ('Zieleń', 3)")
# cursor.execute("INSERT INTO project_tags VALUES ('Ekologia', 3)")
# cursor.execute("INSERT INTO project_tags VALUES ('Inwestycja', 3)")
# cursor.execute("INSERT INTO project_tags VALUES ('Społeczność', 4)")
# cursor.execute("INSERT INTO project_tags VALUES ('Społeczność', 5)")
# cursor.execute("INSERT INTO project_tags VALUES ('Edukacja', 5)")
# cursor.execute("INSERT INTO project_tags VALUES ('Dzieci', 6)")
# cursor.execute("INSERT INTO project_tags VALUES ('Beton', 6)")
