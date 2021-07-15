import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Layout Web</title>
      </header>
<body>
<table border="1" align="center" width="100%">
	<tr>
		<th colspan="3" height="130px" width="100%" bgcolor="blue"><h1>WEBSITE<h1></th>
	</tr>
	<tr>
		<td align="center" colspan="3" height="30px" bgcolor="grey"><marquee><b><u>Selamat Datang di Website Kami</u></marquee></td>
	</tr>
	<tr>
		<td align="center" height="200px" width="25%" bgcolor="grey"><img src="RPL4.jpg" width="100%"></td>
		<td align="center" colspan="3" rowspan="3" bgcolor="grey">
			<video width="75%" controls>
				<source src="Deadpool.mp4" type="video/mp4">
				</video>
				<p><b>
				Diatas Adalah Cuplikan Film Deadpool
				<p>
					<a href="Biodata1.html">Klik Untuk Melihat Biodata Saya</a>
					<a href="Form.html">KLik Untuk Daftar Biodata</a>
			</td>
	</tr>
	<tr>
		<td align="center" height="200px" width="25%" bgcolor="grey">
			<audio controls>
				<source src="song.mp3" type="audio/mp3">
				</audio>
		</td>
	</tr>
	<tr>
		<td align="center" height="200px" width="25%" bgcolor="grey"><<embed src="naruto.gif"></td>
	</tr>
	<tr>
		<td align="center" colspan="3" height="40px" bgcolor="blue"><marquee><b><u>Terima Kasih Sudah Mengunjungi Website Kami</u></td>
	</tr>
</table>
</body>
    </div>
  );
}

export default App;
