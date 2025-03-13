import Container from "@/components/shared/Container";
import Image from "next/image";
import job from "@/app/assets/img/icon/briefcase.png";
import car from "@/app/assets/img/icon/car-wash.png";
import cat from "@/app/assets/img/icon/cat.png";
import phone from "@/app/assets/img/icon/iphone.png";
import monitor from "@/app/assets/img/icon/monitor.png";
import house from "@/app/assets/img/icon/house.png";
import livingRoom from "@/app/assets/img/icon/living-room.png";
import dress from "@/app/assets/img/icon/dress.png";
import football from "@/app/assets/img/icon/football.png";
import tTshirt from "@/app/assets/img/icon/design.png";
import eduction from "@/app/assets/img/icon/mortarboard.png";
import service from "@/app/assets/img/icon/service.png";
import SectionTitle from "@/components/shared/SectionTitle";

const items = [
  { title: "Mobiles", info: "78,463 ads", img: phone },
  { title: "Electronics", info: "54,485 ads", img: monitor },
  { title: "Vehicles", info: "31,099 ads", img: car },
  { title: "Pets & Animals", info: "12,998 ads", img: cat },
  { title: "Property", info: "17,920 ads", img: house },
  { title: "Home & Living", info: "14,657 ads", img: livingRoom },
  { title: "jobs", info: "1,141 ads", img: job },
  { title: "Women's Fashion", info: "5,686 ads", img: dress },
  { title: "Hobbies & Sports", info: "5,522 ads", img: football },
  { title: "Men's Fashion", info: "6,474 ads", img: tTshirt },
  { title: "Eduction", info: "21,14 ads", img: eduction },
  { title: "Services", info: "740 ads", img: service },
];

const BrowseItems = () => {
  return (
    <div className="mt-16">
      <Container>
        <SectionTitle title="Browse items by category" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-start items-center gap-4 space-y-6"
            >
              <div className="mt-5">
                <Image src={item.img} alt="job icon" width={40} />
              </div>
              {/* info */}
              <div className="flex flex-col space-y-1 text-[#1A1A1A]">
                <h6 className="font-semibold mb-1 tracking-wide text-balance text-lg">
                  {item.title}
                </h6>
                <p className="text-sm">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BrowseItems;
