let lakers = (89 + 120 + 103 + 100) / 4;
let goldenstate = (97 + 105 + 110 + 99) / 4;
let cavaliers = (90 + 117 + 108 + 89) / 4;

switch (true) {
    case (lakers > goldenstate && lakers > cavaliers):
        alert(`Lakers é o time com maior média (${lakers}). Obrigado papai Lebron!`);
        break;

    case (goldenstate > lakers && goldenstate > cavaliers):
        alert(`Golden State é o time com maior média (${goldenstate}).`);
        break;

    case (cavaliers > goldenstate && cavaliers > lakers):
        alert(`Cavaliers é o time com maior média (${cavaliers}).`);
        break;
}