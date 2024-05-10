import { classnameMerge } from "@/lib/classname-merge";

export type AssessmentProps = {
  label: string;
  score: 0 | 1 | 2 | 3 | 4 | 5;
};

type ScoreItemProps = {
  active: boolean;
};

function ScoreItem({ active }: ScoreItemProps) {
  return (
    <div
      className={classnameMerge(
        "h-5 w-5 rounded-full border-2 border-yellow-default",
        active && "bg-yellow-default",
      )}
    />
  );
}

export function Assessment({ label, score }: AssessmentProps) {
  return (
    <div className="flex w-full justify-between sm:gap-20">
      <span className="uppercase">{label}</span>

      <div className="flex flex-row-reverse gap-2">
        <ScoreItem active={score >= 1} />
        <ScoreItem active={score >= 2} />
        <ScoreItem active={score >= 3} />
        <ScoreItem active={score >= 4} />
        <ScoreItem active={score >= 5} />
      </div>
    </div>
  );
}
