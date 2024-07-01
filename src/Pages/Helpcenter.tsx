import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
function Helpcenter() {
    return(
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="flex item items-center">I can't Log In</AccordionTrigger>
                <AccordionContent>
                    If you're having trouble logging into your account, you can learn how to do things like recover your password, confirm your identity or what to do if your account has been disabled.

                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="flex item items-center">Recover your password
                </AccordionTrigger>
                <AccordionContent>
                    If you're having trouble logging into your account, you can learn how to do things like recover your  password, confirm your identity or what to do if your account has been disabled.

                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="flex item items-center">What to do if you forget your username

                </AccordionTrigger>
                <AccordionContent>
                    If you're having trouble logging into your  account, you can learn how to do things like recover your  password, confirm your identity or what to do if your account has been disabled.

                </AccordionContent>
            </AccordionItem>
        </Accordion>

    );
} 
export default Helpcenter;