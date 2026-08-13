export default async function handler(req,res){
  try{
    const {latitude,longitude,city,country}=req.query;
    const d=new Date(),day=d.getDate(),month=d.getMonth()+1,year=d.getFullYear();
    let url;
    if(latitude&&longitude){
      url=`https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&method=20`;
    }else{
      url=`https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=${encodeURIComponent(city||"Jakarta")}&country=${encodeURIComponent(country||"Indonesia")}&method=20`;
    }
    const r=await fetch(url);
    if(!r.ok) throw new Error("Prayer API failed");
    const data=await r.json();
    res.setHeader("Cache-Control","s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json(data);
  }catch(e){return res.status(500).json({error:"Gagal mengambil jadwal shalat."});}
}
