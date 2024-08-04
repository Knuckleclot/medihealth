import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/data";

export default function PersonalInfo() {
  return (
    <div className="">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold">Personal Info</h2>
        </div>
        <div className="space-y-6">
          {PERSONAL_INFO.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-[1fr_auto] items-center gap-4 border-b pb-6`}
            >
              <div>
                <div className="text-base">{item.label}</div>
                <div className="text-neutral-800/60 max-w-2xl text-sm">
                  {item.value}
                </div>
              </div>
              <Button variant="outline" size="sm">
                {item.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
