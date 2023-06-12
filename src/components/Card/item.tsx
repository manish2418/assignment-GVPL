import { CardList } from "../../context";
import { Button, Text } from "../../core";

interface Props {
  item: CardList;
}

export default function Card({ item }: Props) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      currency: "INR",
    }).format(value);
  };

  return (
    <div
      className={`flex flex-row m-auto bg-card box-border border-[1px] border-card_border rounded-[10px] isolate w-[830px] h-[320px] px-[24px] py-[16px] overflow-hidden`}
    >
      <img
        src={
          "https://venturebeat.com/wp-content/uploads/2016/06/netflix-logo.png?fit=2048%2C2048&strip=all"
        }
        alt="company logo"
        className="w-[48px] h-[48px] rounded-[5px] mr-2"
      />
      <div className="flex flex-col">
        <Text variant="h3" className="text-[#000000]">
          {item.job_title}
        </Text>
        <Text variant="md" className="text-[#000000]">
          {item.company_name} - {item.industry}
        </Text>
        <Text variant="md" className="text-[#4D4D4D]">
          {item.location} ({item.remote_type})
        </Text>

        <div className="flex flex-col my-6 gap-y-2">
          <Text className="text-[#212427]">
            Part-Time (9:00 am - 5:00 pm IST)
          </Text>
          <Text className="text-[#212427]">
            Experience {item.experience_min} - {item.experience_max} years
          </Text>
          <Text className="text-[#212427]">
            INR (₹) {formatCurrency(item.salary_min)} -{" "}
            {formatCurrency(item.salary_max)} / Month
          </Text>
          <Text className="text-[#212427]">
            {item.total_employee} employees
          </Text>
        </div>
        <div className="flex flex-row gap-6">
          {item.quick_apply && <Button variant="primary" label="Apply Now" />}
          {item.external_apply && <Button variant="outline" label="External Apply" />}
        </div>
      </div>
    </div>
  );
}
