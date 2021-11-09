<?php

namespace ContainerPHh031l;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'knplabs'.\DIRECTORY_SEPARATOR.'knp-components'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Knp'.\DIRECTORY_SEPARATOR.'Component'.\DIRECTORY_SEPARATOR.'Pager'.\DIRECTORY_SEPARATOR.'PaginatorInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'knplabs'.\DIRECTORY_SEPARATOR.'knp-components'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Knp'.\DIRECTORY_SEPARATOR.'Component'.\DIRECTORY_SEPARATOR.'Pager'.\DIRECTORY_SEPARATOR.'Paginator.php';

class PaginatorInterface_82dac15 implements \ProxyManager\Proxy\VirtualProxyInterface, \Knp\Component\Pager\PaginatorInterface
{
    /**
     * @var \Knp\Component\Pager\PaginatorInterface|null wrapped object, if the proxy is initialized
     */
    private $valueHolderc2ee2 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerf99a2 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties0f9f7 = [
        
    ];

    public function paginate($target, int $page = 1, ?int $limit = null, array $options = []) : \Knp\Component\Pager\Pagination\PaginationInterface
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'paginate', array('target' => $target, 'page' => $page, 'limit' => $limit, 'options' => $options), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        if ($this->valueHolderc2ee2 === $returnValue = $this->valueHolderc2ee2->paginate($target, $page, $limit, $options)) {
            return $this;
        }

        return $returnValue;
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        $instance->initializerf99a2 = $initializer;

        return $instance;
    }

    public function __construct()
    {
        static $reflection;

        if (! $this->valueHolderc2ee2) {
            $reflection = $reflection ?? new \ReflectionClass('Knp\\Component\\Pager\\PaginatorInterface');
            $this->valueHolderc2ee2 = $reflection->newInstanceWithoutConstructor();
        }
    }

    public function & __get($name)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__get', ['name' => $name], $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        if (isset(self::$publicProperties0f9f7[$name])) {
            return $this->valueHolderc2ee2->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Knp\\Component\\Pager\\PaginatorInterface');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderc2ee2;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderc2ee2;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        $realInstanceReflection = new \ReflectionClass('Knp\\Component\\Pager\\PaginatorInterface');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderc2ee2;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderc2ee2;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__isset', array('name' => $name), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        $realInstanceReflection = new \ReflectionClass('Knp\\Component\\Pager\\PaginatorInterface');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderc2ee2;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolderc2ee2;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__unset', array('name' => $name), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        $realInstanceReflection = new \ReflectionClass('Knp\\Component\\Pager\\PaginatorInterface');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderc2ee2;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolderc2ee2;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__clone', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        $this->valueHolderc2ee2 = clone $this->valueHolderc2ee2;
    }

    public function __sleep()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__sleep', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return array('valueHolderc2ee2');
    }

    public function __wakeup()
    {
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerf99a2 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerf99a2;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'initializeProxy', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderc2ee2;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderc2ee2;
    }
}

if (!\class_exists('PaginatorInterface_82dac15', false)) {
    \class_alias(__NAMESPACE__.'\\PaginatorInterface_82dac15', 'PaginatorInterface_82dac15', false);
}
