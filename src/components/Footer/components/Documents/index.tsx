import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

export const Documents = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <p
        onClick={onOpen}
        className="md:w-[200px] underline text-lightGrey text-center hover:text-white cursor-pointer"
      >
        Политика обработки персональных данных
      </p>
      <Modal
        isOpen={isOpen}
        radius="none"
        size="4xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                Обработка данных
              </ModalHeader>
              <ModalBody className=" text-black">
                <p>1. Что регулирует настоящая политика конфиденциальности</p>
                <p>
                  Настоящая политика конфиденциальности (далее — Политика)
                  действует в отношении всей информации, включая персональные
                  данные в понимании применимого законодательства (далее —
                  «Персональная информация»), которую ООО «Гросс маркет» и/или
                  его аффилированные лица, в том числе входящие в одну группу с
                  ООО «Гросс маркет» (далее — «Гросс маркет»), могут получить о
                  Вас в процессе использования Вами любых сайтов, программ,
                  продуктов и/или сервисов Гросс маркет (далее вместе
                  «Сервисы»), информацию о которых Гросс маркет может также
                  получать Персональную информацию от своих партнеров (далее —
                  «Партнеры»), сайты, программы, продукты или сервисы которых Вы
                  используете (например, от рекламодателей Гросс маркет или
                  службами такси). В таких случаях передача Персональной
                  информации возможна только в случаях, установленных применимым
                  законодательством, и осуществляется на основании специальных
                  договоров между Гросс маркет и каждым из Партнеров.
                </p>
                <p>
                  Пожалуйста, обратите внимание, что использование любого из
                  Сайтов и/или Сервисов может регулироваться дополнительными
                  условиями, которые могут вносить в настоящую Политику
                  изменения и/или дополнения, и/или иметь специальные условия в
                  отношении персональной информации, размещенные в
                  соответствующих разделах документов для таких Сайтов /или
                  Сервисов.
                </p>
                <p>2. Кто обрабатывает информацию</p>
                <p>
                  2. Кто обрабатывает информацию Для обеспечения использования
                  Вами Сайтов и Сервисов Ваша Персональная информация собирается
                  и используется Яндексом, в том числе включая общество с
                  ограниченной ответственностью «Гросс маркет», юридическое
                  лицо, созданное по законодательству Российской Федерации и
                  зарегистрированное по адресу: 123351, Россия, Москва, ул.
                  Гроссова, д. 12 (ООО «Гросс маркет»), или его аффилированным
                  лицом, предоставляющим соответствующий Сервис в иных
                  юрисдикциях. С информацией о том, какое лицо предоставляет тот
                  или иной Сервис, Вы можете ознакомиться в условиях
                  использования соответствующего Сервиса.
                </p>
                <p>3. Какова цель данной Политики</p>
                <p>
                  Защита Вашей Персональной информации и Вашей
                  конфиденциальности чрезвычайно важны для Гросс маркета.
                  Поэтому при использовании Вами Сайтов и Сервисов Гросс маркет
                  защищает и обрабатывает Вашу Персональную информацию в строгом
                  соответствии с применимым законодательством.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
