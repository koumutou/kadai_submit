    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } 
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCQ7OaqQUsqicgXIPP1YfBx28068fF3Hr0",
        authDomain: "g-sacademy.firebaseapp.com",
        projectId: "g-sacademy",
        storageBucket: "g-sacademy.appspot.com",
        messagingSenderId: "1031590885401",
        appId: "1:1031590885401:web:0be2bd63359117f7a41288"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db  = getDatabase(app); //RealtimeDBに接続
    const dbRef = ref(db,"chat"); //RealtimeDB内の"chat"を使う


    $('#send').on('click', function(){
      // id='uname' つまり #uname 名前のところ
      // id='text' つまり #text テキストエリアのところ
      const text = $('#text').val();
      const uname = $('#uname').val();

      // データの塊を作成している
      const msg = {
       uname: $('#uname').val(),
       text: $('#text').val(), 
      }

      //ユニークKEYを生成 = 絶対にかぶらない番号みたいなもの
      const newPostRef = push(dbRef);
      //"chat"にユニークKEYをつけてオブジェクトデータを登録
      set(newPostRef, msg);

    });


    onChildAdded(dbRef, function(data){
        const msg = data.val();
        const key = data.key; 
    
        const html = `
        <p>${msg.uname}</p>
        <br>
        <p>${msg.text}</p>
        `;

        console.log(html);

    $("#output").append(html);
    });

    </script>

