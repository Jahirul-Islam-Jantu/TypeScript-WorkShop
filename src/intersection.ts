type baseProps = {
  id: string | number;
  name: string;
};

type buttonProps = baseProps & {
  label: string;
  onClick: () => void;
};

type toggleProps = baseProps & {
  isToggled: boolean;
  onToggle: () => void;
};

type inputProps = baseProps & {
  value: string;
  onChange: (value: string) => void;
};



