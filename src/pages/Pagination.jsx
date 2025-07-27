// import { useEffect, useRef, useState } from 'react';

// function Pagination() {
//     // //Pagination
//     // const [characters, setCharacters] = useState([]);
//     // const [links, setLinks] = useState({});
//     // const [loading, setLoading] = useState(false);

//     // const fetchData = async (url = 'https://dragonball-api.com/api/characters?limit=5') => {
//     //     try {
//     //         setLoading(true);
//     //         const res = await fetch(url);
//     //         const data = await res.json();
//     //         setCharacters(data.items || []);
//     //         setLinks(data.links || {});
//     //     } catch (err) {
//     //         console.error('Failed to fetch characters:', err);
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

//     // useEffect(() => {
//     //     fetchData();
//     // }, []);

//     // /Load more
//     // const [characters, setCharacters] = useState([]);
//     // const [page, setPage] = useState(1);
//     // const [hasNext, setHasNext] = useState(true);
//     // const [loading, setLoading] = useState(false);

//     // const fetchMore = async () => {
//     //     setLoading(true);
//     //     const res = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=5`);
//     //     const data = await res.json();
//     //     setCharacters((prev) => [...prev, ...data.items]);
//     //     setHasNext(Boolean(data.links?.next));
//     //     setPage((prev) => prev + 1);
//     //     setLoading(false);
//     // };

//     // useEffect(() => {
//     //     fetchMore(); // Load lần đầu
//     // }, []);

//     ///Infinite scroll
//     const [characters, setCharacters] = useState([]);
//     const [page, setPage] = useState(1);
//     const [hasNext, setHasNext] = useState(true);
//     const [loading, setLoading] = useState(false);
//     const observerRef = useRef(null);

//     const fetchMore = async () => {
//         if (loading || !hasNext) return;

//         setLoading(true);
//         const res = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=5`);
//         const data = await res.json();
//         setCharacters((prev) => [...prev, ...data.items]);
//         setHasNext(Boolean(data.links?.next));
//         setPage((prev) => prev + 1);
//         setLoading(false);
//     };

//     useEffect(() => {
//         fetchMore(); // Load ban đầu
//     }, []);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 if (entries[0].isIntersecting && hasNext) {
//                     fetchMore();
//                 }
//             },
//             { threshold: 1 },
//         );

//         if (observerRef.current) {
//             observer.observe(observerRef.current);
//         }

//         return () => observer.disconnect();
//     }, [hasNext]);

//     return (
//         <div className="text w-[90%] mx-auto pt-14 min-h-screen bg-white text-gray-900">
//             <h2 className="font-bold text-3xl border-b-1 mb-10 mt-30">Pagination</h2>
//             <div className="p-6 max-w-3xl mx-auto">
//                 <h1 className="text-3xl font-bold mb-4">Infinite Scroll - Dragon Ball</h1>

//                 <ul className="space-y-2">
//                     {characters.map((char) => (
//                         <li key={char.id} className="p-4 bg-gray-100 rounded shadow">
//                             <p className="font-semibold">{char.name}</p>
//                         </li>
//                     ))}
//                 </ul>

//                 <div ref={observerRef} className="h-10 mt-6 text-center">
//                     {loading && <p>Đang tải thêm...</p>}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Pagination;

// // {/* Pagination */}
// // <div className="p-6 max-w-3xl mx-auto">
// //     <h1 className="text-3xl font-bold mb-4">Danh sách nhân vật</h1>
// //     {loading && <p>Đang tải...</p>}
// //     <ul className="space-y-2">
// //         {characters.map((char) => (
// //             <li key={char.id} className="p-4 bg-gray-100 rounded shadow">
// //                 <p className="font-semibold">{char.name}</p>
// //                 <p className="text-sm text-gray-600">Race: {char.race}</p>
// //             </li>
// //         ))}
// //     </ul>
// //     {/* Buttons */}
// //     <div className="flex justify-center gap-3 mt-6">
// //         <button
// //             onClick={() => fetchData(links.first)}
// //             disabled={!links.first}
// //             className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
// //         >
// //             Trang đầu
// //         </button>
// //         <button
// //             onClick={() => fetchData(links.previous)}
// //             disabled={!links.previous}
// //             className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
// //         >
// //             Trước
// //         </button>
// //         <button
// //             onClick={() => fetchData(links.next)}
// //             disabled={!links.next}
// //             className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
// //         >
// //             Sau
// //         </button>
// //         <button
// //             onClick={() => fetchData(links.last)}
// //             disabled={!links.last}
// //             className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
// //         >
// //             Trang cuối
// //         </button>
// //     </div>
// // </div>;

// // {/* Load More */}
// /* <div className="p-6 max-w-3xl mx-auto">
//     <h1 className="text-3xl font-bold mb-4">Danh sách nhân vật</h1>

//     <ul className="space-y-2">
//         {characters.map((char) => (
//             <li key={char.id} className="p-4 bg-gray-100 rounded shadow">
//                 <p className="font-semibold">{char.name}</p>
//             </li>
//         ))}
//     </ul>

//     {hasNext && (
//         <div className="text-center mt-6">
//             <button onClick={fetchMore} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//                 {loading ? 'Đang tải...' : 'Tải thêm'}
//             </button>
//         </div>
//     )}
// </div>; */
