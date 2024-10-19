let Test = "Test/";

document.getElementById('SetClass5').addEventListener('click', function() {
    alert('Этот выбор временно недоступен');
});

document.getElementById('SetClass6').addEventListener('click', function() {
    alert('Этот выбор временно недоступен');
});

document.getElementById('SetClass7').addEventListener('click', function() {
    document.getElementById('New').innerHTML = `
    <H1 class="center">Выберите предмет</H1>
    <nav id="SetItem">
        <ul>
            <li id="SetItemAlgebra"><H3>Алгебра</H3></li>
            <li id="SetItemGeometry"><H3>Геометрия</H3></li>
        </ul>
    </nav>
    `;

    document.getElementById('Class').innerHTML += "7";
    Test += "7/";

    document.getElementById('SetItemAlgebra').addEventListener('click', function() {
        alert('Этот выбор временно недоступен');
    });

    document.getElementById('SetItemGeometry').addEventListener('click', function() {
        document.getElementById('New').innerHTML = `
        <H1 class="center">Выберите тему:</H1>
        <nav id="SetTopic">
            <ul>
                <li id="SetTopicEvklid"><H3>Основы Евклидовой Геометрии</H3></li>
            </ul>
        </nav>
        `;

        document.getElementById('Item').innerHTML += "Геометрия";
        Test += "Геометрия/";

        document.getElementById('SetTopicEvklid').addEventListener('click', function() {
            Test += "ОсновыЕвклидовойГеометрии.html";

            document.getElementById('New').innerHTML = `
            <H1 class="center">↑<br><br>Проверьте правильность<br><br><a href="${Test}">Открыть тест</a></H1>
            `;

            document.getElementById('Topic').innerHTML += "Основы Евклидовой Геометрии";
        });
    });
});

document.getElementById('SetClass8').addEventListener('click', function() {
    alert('Этот выбор временно недоступен');
});