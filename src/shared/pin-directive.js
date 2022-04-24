/* eslint-disable */
export default function (element, binding) {
  const el = element;

  Object.keys(binding.value).forEach((position) => {
    el.style[position] = binding.value[position];
  });

  el.style.position = 'absolute';
}
