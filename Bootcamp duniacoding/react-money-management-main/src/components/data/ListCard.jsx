const ListCard = ({ data, deleteData }) => {
    function formatRupiah(number) {
        const formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        });
        return formatter.format(number);
    }
 
 
    return (
        <>
            <div className='col-md-7'>
                <div className='card mb-3'>
                    <div className='card-body'>
                        <h5>Data</h5>
                        <table className='table mt-4'>
                            <thead>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Judul</th>
                                    <th scope='col'>Jumlah</th>
                                    <th scope='col'>Jenis</th>
                                    <th scope='col'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{item.title}</td>
                                        <td>{formatRupiah(item.value)}</td>
                                        <td>
                                            {item.type === 1
                                                ? "Pemasukan"
                                                : "Pengeluaran"}
                                        </td>
                                        <td>
                                            <p
                                                onClick={() =>
                                                    deleteData(item.code)
                                                }
                                                className='mb-0 text-danger'>
                                                Hapus Data
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
 };
 
 export default ListCard;
 